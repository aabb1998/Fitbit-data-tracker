import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";

const SleepData = ({ date, duration, efficiency }) => {
	const durationConvert = () => {
		let totalSeconds = Number(durationConvert);
		let hours = totalSeconds;

		return hours;
	};

	return (
		<View style={styles.sleepDayInfo}>
			<View style={styles.sleepDayHeader}>
				<Text>Time Asleep</Text>
				<Text>{date}</Text>
			</View>
			<View style={styles.sleepDayHeader}>
				<Text>{durationConvert()}</Text>
				<Text>{efficiency}</Text>
			</View>
			<View>
				<Progress.Bar
					progress={duration / 26800000}
					width={200}
					color={duration / 26800000 > 1 ? "green" : "red"}
				/>
			</View>
		</View>
	);
};

export default SleepData;

const styles = StyleSheet.create({
	sleepDayInfo: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		justifyContent: "space-around",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 20,
		width: "95%",
		alignItems: "center",
		textAlign: "center",
		margin: 10,
		borderRadius: 10,
	},
	sleepDayHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
});
