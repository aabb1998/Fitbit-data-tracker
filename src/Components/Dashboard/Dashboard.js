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
				<Text>User Name</Text>
			</View>
			<View style={styles.fatigueSection}>
				<Image
					style={styles.profileImg}
					source={{
						uri: "https://media-exp1.licdn.com/dms/image/C5603AQFQY_gG-DCSuw/profile-displayphoto-shrink_200_200/0/1599099548476?e=1636588800&v=beta&t=BVdy-GEPdujawBjWCF_vyaED5d9jm8mG8FLu3ahSTBg",
					}}
				/>
				<Text>User Name</Text>
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
		height: 100,
		padding: 20,
	},
});
