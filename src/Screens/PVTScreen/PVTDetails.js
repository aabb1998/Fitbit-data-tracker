import React, { Component, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";

import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	Dimensions,
	Alert,
	Button,
	ActivityIndicator,
} from "react-native";
import { render } from "react-dom";
import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAi3OxyKKck1xon1mFU-cDG1bMN16kAMe8",
	authDomain: "fitbit-data-tracker.firebaseapp.com",
	projectId: "fitbit-data-tracker",
	storageBucket: "fitbit-data-tracker.appspot.com",
	messagingSenderId: "890856216222",
	appId: "1:890856216222:web:889f2fdc72320094b7cd8f",
};

const labels1 = [];
const data1 = [0];

const labels2 = [];
const data2 = [];

export default class PVTDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sd1: [],
			sl1: [],
		};
	}

	checkArray = () => {
		if (this.state.sd1) {
			this.state.sd1.map((item) => data2.push(item));
		}
	};

	async DisplayRes() {
		var arr = [];
		const citiesRef = firebase.firestore().collection("pvtResults");
		const snapshot = await citiesRef.get();
		snapshot.forEach((doc) => {
			console.log(doc.data());
			arr.push(doc.data());
		});
		for (let i = 0; i < arr.length; i++) {
			// console.log(arr[i]);
			data1.push(arr[i].score);
			this.state.sd1.push(arr[i].score);
			//var date = Date.parse(arr[i].testDateTime);
			labels1.push(arr[i].testDateTime);
			// console.log(this.state.sd1);
		}

		for (let i = 0; i < data1.length; i++) {
			console.log(data1[i]);
		}
	}

	render() {
		if (/*this.state.sd1*/ 1 == 1) {
			if (/*this.state.sd1.length*/ 1 == 1) {
				return (
					<View>
						<View
							style={{
								alignItems: "center",
							}}
						>
							<Text style={{ fontSize: 25, marginTop: 70 }}>
								Daily Scores
							</Text>
						</View>

						<View style={{ alignItems: "center" }}>
							<LineChart
								data={{
									labels: this.state.sl1,
									datasets: [
										{
											data: [
												Math.random() * 100,
												Math.random() * 100,
												Math.random() * 100,
												Math.random() * 100,
												Math.random() * 100,
												Math.random() * 100,
											],
										},
									],
								}}
								width={Dimensions.get("window").width - 50} // from react-native
								height={220}
								chartConfig={{
									backgroundColor: "#e26a00",
									backgroundGradientFrom: "#D9D9D9",
									backgroundGradientTo: "#FFF",
									decimalPlaces: 2, // optional, defaults to 2dp
									color: (opacity = 1) =>
										`rgba(0, 0, 0, ${opacity})`,
									labelColor: (opacity = 1) =>
										`rgba(0, 0, 0, ${opacity})`,
									style: {
										borderRadius: 16,
									},
									propsForDots: {
										r: "6",
										strokeWidth: "2",
										stroke: "#ffa726",
									},
								}}
								bezier
								style={{
									marginVertical: 5,
									borderRadius: 15,
								}}
							/>
						</View>

						<View
							style={{
								alignItems: "center",
							}}
						>
							<Text style={{ fontSize: 25, marginTop: 70 }}>
								Test Breakdown
							</Text>
						</View>
						<View style={{ alignItems: "center" }}>
							<LineChart
								data={{
									labels: labels2,
									datasets: [
										{
											data: data2,
										},
									],
								}}
								width={Dimensions.get("window").width - 50} // from react-native
								height={220}
								chartConfig={{
									backgroundColor: "#e26a00",
									backgroundGradientFrom: "#D9D9D9",
									backgroundGradientTo: "#FFF",
									decimalPlaces: 2, // optional, defaults to 2dp
									color: (opacity = 1) =>
										`rgba(0, 0, 0, ${opacity})`,
									labelColor: (opacity = 1) =>
										`rgba(0, 0, 0, ${opacity})`,
									style: {
										borderRadius: 16,
									},
									propsForDots: {
										r: "6",
										strokeWidth: "2",
										stroke: "#ffa726",
									},
								}}
								bezier
								style={{
									marginVertical: 5,
									borderRadius: 15,
								}}
							/>
						</View>
						<Button
							title="End Test"
							onPress={() => this.DisplayRes()}
						/>
					</View>
				);
			} else {
				return (
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							flex: 1,
						}}
					>
						<ActivityIndicator size="large" />
					</View>
				);
			}
		} else {
			return (
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flex: 1,
					}}
				>
					<Text>no data found</Text>
				</View>
			);
		}
	}
	componentDidMount = () => {
		// console.log("hi");
		this.getChartData();
	};

	getChartData = async () => {
		var arr = [];
		const citiesRef = firebase.firestore().collection("pvtResults");
		const snapshot = await citiesRef.get();
		snapshot.forEach((doc) => {
			// console.log(doc.data());
			arr.push(doc.data());
		});
		for (let i = 0; i < arr.length; i++) {
			this.state.sd1.push(arr[i].score);
			this.state.sl1.push(arr[i].testDateTime);
		}
		// console.log("first object is ");
		console.log(this.state.sd1);
	};
}
