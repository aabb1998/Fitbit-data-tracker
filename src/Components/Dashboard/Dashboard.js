import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const Dashboard = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<View style={styles.mainContainer}>
				<Text style={styles.textHeader}>Welcome Back</Text>
				<Text style={styles.textSmall}>
					Your sleep data is ready to view!
				</Text>
			</View>
			<View style={styles.userSection}>
				<Image
					style={styles.profileImg}
					source={{
						uri: "https://media-exp1.licdn.com/dms/image/C5603AQFQY_gG-DCSuw/profile-displayphoto-shrink_200_200/0/1599099548476?e=1636588800&v=beta&t=BVdy-GEPdujawBjWCF_vyaED5d9jm8mG8FLu3ahSTBg",
					}}
				/>
				<Text style={styles.userSectionName}>Abdul Abbou</Text>
			</View>
			<View style={styles.fatigueSection}>
				<View style={styles.fatigueSectionHeader}>
					<Text style={{ fontSize: 15, fontWeight: "bold" }}>
						Overall Fatigue
					</Text>
				</View>
				<View style={styles.fatigueSectionData}>
					<Text style={{ fontSize: 35, fontWeight: "bolder" }}>
						5<Text style={{ fontSize: 18 }}>th</Text>
					</Text>
					<Image
						style={{ width: 150, height: 50 }}
						source={{
							uri: "https://i.gyazo.com/68041204d46ddcfa528ff4d6a5bd0f15.png",
						}}
					></Image>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={styles.fatigueSectionText}>Level</Text>
					<Text style={styles.fatigueSectionText}>
						Congrats, you're in the healthy range!
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	textHeader: {
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	textSmall: {
		fontSize: 18,
	},
	mainContainer: {
		marginTop: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "center",
	},
	profileImg: {
		height: 110,
		width: 110,
		borderRadius: 60,
		marginRight: 20,
		borderColor: "white",
		borderWidth: 5,
	},
	userSection: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "left",
		textAlign: "center",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 50,
		backgroundColor: "white",
		borderRadius: 20,
		height: 90,
		padding: 20,
	},
	userSectionName: {
		fontSize: 20,
		fontWeight: "600",
	},
	fatigueSection: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		height: 200,
	},
	fatigueSectionData: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		textAlign: "center",
		marginBottom: 20,
		alignItems: "flex-end",
	},
	fatigueSectionText: {
		color: "#C5C5C5",
		fontSize: 12,
		fontWeight: "600",
	},
});