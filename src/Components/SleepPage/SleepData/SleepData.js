import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SleepData = ({ date, duration, efficiency }) => {
	return (
		<View style={styles.sleepDayInfo}>
			<Text>{date}</Text>
			<Text>{duration}</Text>
			<Text>{efficiency}</Text>
		</View>
	);
};

export default SleepData;

const styles = StyleSheet.create({
	sleepDayInfo: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
	},
});
