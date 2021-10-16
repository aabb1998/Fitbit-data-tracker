import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import bed from "../../../Assets/Dashboard/bed.png";
import heartRate from "../../../Assets/Dashboard/heart-rate.png";

const DashboardFavorites = () => {
	return (
		<View style={styles.dashboardFavorites}>
			<View style={styles.sleepSection}>
				<View style={styles.favoritesInner}>
					<Image
						style={{ height: 20, width: 20, marginRight: 5 }}
						source={bed}
					/>
					<View>
						<Text>Sleep Analysis</Text>
						<Text style={styles.analysisSmallText}>Yesterday</Text>
					</View>
				</View>
			</View>
			<View style={styles.sleepSection}>
				<View style={styles.favoritesInner}>
					<Image
						style={{ height: 20, width: 20, marginRight: 5 }}
						source={heartRate}
					/>
					<View>
						<Text>Heart Rate</Text>
						<Text style={styles.analysisSmallText} t>
							17 mins ago
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default DashboardFavorites;

const styles = StyleSheet.create({
	dashboardFavorites: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	sleepSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "white",
		width: "47%",
		borderRadius: 20,
		height: 130,
		padding: 8,
		shadowColor: "gray",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 1,
		shadowRadius: 2,
		elevation: 10,
	},
	favoritesInner: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	analysisSmallText: {
		fontSize: 10,
		color: "#C5C5C5",
	},
});
