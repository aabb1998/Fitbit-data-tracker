import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import bed from "../../Assets/Dashboard/bed.png";
import heartRate from "../../Assets/Dashboard/heart-rate.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal.png";
import activity from "../../Assets/Dashboard/activity.png";

const DashboardMenu = () => {
	return (
		<View>
			<View style={styles.floatingMenu}>
				<Image style={styles.floatingMenuImage} source={bedwhite} />
				<Image style={styles.floatingMenuImage} source={journal} />
				<Image style={styles.floatingMenuImage} source={heartWhite} />
				<Image style={styles.floatingMenuImage3} source={activity} />
			</View>
		</View>
	);
};

export default DashboardMenu;

const styles = StyleSheet.create({
	floatingMenu: {
		position: "absolute",
		alignContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#2D14C4",
		padding: 20,
		borderRadius: 30,
		color: "white",
		bottom: 10,
		zIndex: 2,
		width: "100%",
	},
	floatingMenuImage: {
		width: 20,
		height: 20,
		opacity: 0.4,
	},
	floatingMenuImage3: {
		width: 20,
		height: 20,
		opacity: 1,
	},
});
