import React, { useState } from "react";
import { Image, View, StyleSheet, Button, Alert, TouchableOpacity, Text, SafeAreaView, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal.png";
import activity from "../../Assets/Dashboard/activity.png";


export default function GraphScreen({ navigation }) {

	const [chartWidth, setChartWidth] = useState(0);
	const [activeSection, setActiveSection] = useState(0);
	const [sections, setSections] = useState([
		{
			name: "Distance(km)",
		},
		{ name: "Steps" },
	]);
	const getChartParentSize = (event) => {
		const { width, height } = event.nativeEvent.layout;

		setChartWidth((_) => width);
	};
	const onPASSPress = () => {
		navigation.navigate("PSS");

	};
	const onSTAIPress = () => {
		navigation.navigate("STAI");

	};
	const onPressMenuFirst = () => {
		navigation.navigate("Dashboard");

	};


	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff", width: "100%", marginTop: 20, flexDirection: "column", }}>

			<View style={styles.container}>
				<ScrollView>
					<View style={styles.container}>
						<View style={styles.mainContainer}>
						<View style={{ flexDirection: "row", marginTop: 30, alignItems: "center",}}>
							<Text style={styles.textHeader}>Weekly Survey</Text>
						</View>
							<View style={{ flexDirection: "row", marginTop: 30, alignItems: "center", }}>
								<Text style={styles.textHeader}>PSS</Text>
								<TouchableOpacity
									style={styles.button}
									onPress={() => onPASSPress()}
								>
									<Text style={styles.buttonTitle}>Start</Text>
								</TouchableOpacity>

							</View>

							<View style={styles.graphCard}>

								<View onLayout={getChartParentSize} style={styles.chart}>
									<LineChart
										data={{
											labels: [
												"Week 1", "Weekk 2", "Week 3", "Week 4", "May", "Week 5"
											],
											datasets: [
												{
													data: [18,23,20,30,26,15],
												},
											],
										}}
										width={chartWidth + 50}
										height={180}
										chartConfig={{
											backgroundColor: "#ffffff00",
											backgroundGradientFrom: "#ffffff00",
											backgroundGradientTo: "#ffffff00",
											backgroundGradientFromOpacity: 0,
											backgroundGradientToOpacity: 0,
											decimalPlaces: 0, // optional, defaults to 2dp
											color: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
											labelColor: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
											propsForDots: {
												r: 3,
												strokeWidth: 2,
												stroke: "#6979f8",
											},
											propsForBackgroundLines: {
												backgroundColor: "red",
											},
										}}
										bezier
										style={{
											padding: 0,
											margin: 0,
											// overflow: "hidden",
										}}
									/>
								</View>
							</View>

							<View style={{ flexDirection: "row", marginTop: 30, alignItems: "center", }}>
								<Text style={styles.textHeader}>STAI</Text>
								<TouchableOpacity
									style={styles.button}
									onPress={() => onSTAIPress()}
								>
									<Text style={styles.buttonTitle}>Start</Text>
								</TouchableOpacity>

							</View>

							<View style={styles.graphCard}>

								<View onLayout={getChartParentSize} style={styles.chart}>
									<LineChart
										data={{
											labels: [
												"January", "February", "March", "April", "May", "June"
											],
											datasets: [
												{
													data: [30, 15, 45, 26, 60, 30],
												},
											],
										}}
										width={chartWidth + 50}
										height={180}
										chartConfig={{
											backgroundColor: "#ffffff00",
											backgroundGradientFrom: "#ffffff00",
											backgroundGradientTo: "#ffffff00",
											backgroundGradientFromOpacity: 0,
											backgroundGradientToOpacity: 0,
											decimalPlaces: 0, // optional, defaults to 2dp
											color: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
											labelColor: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
											propsForDots: {
												r: 3,
												strokeWidth: 2,
												stroke: "#6979f8",
											},
											propsForBackgroundLines: {
												backgroundColor: "red",
											},
										}}
										bezier
										style={{
											padding: 0,
											margin: 0,
											// overflow: "hidden",
										}}
									/>
								</View>
							</View>
						</View>

					</View>
				</ScrollView>
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.floatingMenu}>
					<TouchableOpacity onPress={() => onPressMenuFirst()}>
						<Image style={styles.floatingMenuImage} source={bedwhite} />
					</TouchableOpacity>

					<Image style={styles.floatingMenuImage3} source={journal} />
					<Image style={styles.floatingMenuImage} source={heartWhite} />
					<Image style={styles.floatingMenuImage} source={activity} />
				</View>

			</View>

		</SafeAreaView >
	);
}
