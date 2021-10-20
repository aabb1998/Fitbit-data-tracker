import React, { Component, useEffect } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	Dimensions,
	Alert,
} from "react-native";

const duration = 180000;

export default class SimpleCircleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorId: 0,
			time: 0,
			isOn: false,
			start: 0,
			testInterval: 0,
			total: 0,
			isCountdown: true, //used to indicate time between tests (true) and actual tests (false)
			responseTime: 0,
			falseStarts: 0,
			results: [],
			lapses: 0,
			started: "CLICK TO START!",
		};

		this.startStopwatch = this.startStopwatch.bind(this);
		this.stopStopwatch = this.stopStopwatch.bind(this);
	}
	onPress = () => {
		var time = this.state.time;
		this.stopStopwatch();
		this.setState({ total: this.state.total + time });

		if (this.state.colorId === 1) {
			//the button is currently red
			if (this.state.isCountdown) {
				//clicked whilst still red but not expecting to (false start)
				this.setState({ falseStarts: this.state.falseStarts + 1 });
				this.BeginTest();
			}
		} //the button is currently green
		else {
			this.setState({ colorId: 1 });
			this.state.responseTime = time;

			if (time < 100 && !this.state.started) {
				//indicates invalid test
				this.state.falseStarts = this.state.falseStarts + 1;
			} else {
				this.state.results.push(time);
				if (time > 355) {
					this.state.lapses = this.state.lapses + 1;
				}
			}
			this.BeginTest();
		}
		this.state.started = "";
	};

	BeginTest() {
		this.stopStopwatch();
		this.setState({ time: 0 });
		if (this.state.total < duration) {
			//test duration
			var min = 1000; //min ms between tests
			var max = 4000; //max ms between tests
			var rand = min + Math.random() * (max - min); //interval between tests

			this.setState({ testInterval: rand });
			this.setState({ isCountdown: true });
			this.startStopwatch();
		} else {
			this.stopStopwatch();
			this.EndPVT();
		}
	}

	EndPVT() {
		//send data to firebase etc
		var total = 0;

		for (var i = 0; i < this.state.results.length; i++) {
			alert("res:" + this.state.results[i]);
			total += this.state.results[i];
		}
		var avg = total / this.state.results.length;
		alert("total" + total);
		alert("avg" + avg);
	}

	startStopwatch() {
		this.setState({
			time: this.state.time,
			start: Date.now() - this.state.time,
			isOn: true,
		});
		this.timer = setInterval(() => {
			if (
				this.state.isCountdown &&
				this.state.time > this.state.testInterval
			) {
				//indicates that the time period between tests has elapsed
				this.setState({ colorId: 0 });
				this.setState({ total: this.state.total + this.state.time });
				this.stopStopwatch();
				this.setState({ time: 0 });
				this.startStopwatch();
				this.setState({ isCountdown: false });
			}

			this.setState({
				time: Date.now() - this.state.start,
			});
		}, 10);
	}

	stopStopwatch() {
		this.setState({ isOn: false });
		this.state.time = 0;
		this.state.testInterval = 0;
		clearInterval(this.timer);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.8} //The opacity of the button when it is pressed
					style={
						this.state.colorId === 1
							? styles.buttonOff
							: styles.buttonOn
					}
					onPress={() => this.onPress()}
				>
					<Text style={styles.text}>{this.state.started}</Text>
					{this.props.children}
				</TouchableOpacity>

				<View style={styles.dataSection}>
					<View style={styles.dataItem}>
						<Text>Time: </Text>
						<Text>{this.state.time}</Text>
					</View>
					<View style={styles.dataItem}>
						<Text>Total: </Text>
						<Text>{this.state.total}</Text>
					</View>
					<View style={styles.dataItem}>
						<Text>Interval:</Text>
						<Text> {this.state.testInterval}</Text>
					</View>
					<View style={styles.dataItem}>
						<Text>Misclicks:</Text>
						<Text>{this.state.falseStarts}</Text>
					</View>
				</View>
			</View>
		);
	}
}

const devHeight = Dimensions.get("window").height;
const devWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		position: "relative",
		zIndex: 0,
		//backgroundColor: 'rgba(255,95,28,1)', //add a background to highlight the touchable area
		alignItems: "center",
		marginBottom: 20,
	},
	buttonOn: {
		backgroundColor: "rgba(0,210,0,1)",
		justifyContent: "center",
		alignContent: "center",
		borderWidth: 3,
		borderRadius: (devWidth * 4) / 5,
		width: (devWidth * 2) / 5,
		height: (devWidth * 2) / 5,
		borderColor: "rgba(0,210,0,1)",
	},
	buttonOff: {
		backgroundColor: "rgba(210,0,0,1)",
		justifyContent: "center",
		alignContent: "center",
		borderWidth: 3,
		borderRadius: (devWidth * 4) / 5,
		width: (devWidth * 2) / 5,
		height: (devWidth * 2) / 5,
		borderColor: "rgba(210,0,0,1)",
	},
	text: {
		justifyContent: "center",
		alignContent: "center",
		// marginLeft: devWidth / 4.2,
		marginLeft: 26,
	},
	dataSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		width: 350,
	},
	dataItem: {
		display: "flex",
		flexDirection: "column",
		width: 80,
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#C4C4C4",
		padding: 7,
		borderRadius: 10,
		height: 90,
	},
});

/*NOTE: THIS IS USED BASED ON A TUTORIAL AT https://www.jsparling.com/round-buttons-in-react-native/*/
