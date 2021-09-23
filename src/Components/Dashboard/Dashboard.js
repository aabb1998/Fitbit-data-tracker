import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Linking,
} from "react-native";
import DashboardFavorites from "./DashboardFavorites/DashboardFavorites";
import DashboardMenu from "./DashboardMenu";
import qs from "qs";
import config from "../../../config.js";
import { ScrollView } from "react-native-gesture-handler";
import URL from "url-parse";

// function OAuth(client_id, cb) {
// Linking.addEventListener("url", handleUrl);
// function handleUrl(event) {
// 	console.log(event.url);
// 	Linking.removeEventListener("url", handleUrl);
// 	const [, query_string] = event.url.match(/\#(.*)/);
// 	console.log(query_string);
// 	const query = qs.parse(query_string);
// 	console.log(`query: ${JSON.stringify(query)}`);
// 	cb(query.access_token);
// }

// 	const oauthurl = `https://www.fitbit.com/oauth2/authorize?${qs.stringify({
// 		client_id,
// 		response_type: "token",
// 		scope: "heartrate activity activity profile sleep",
// 		redirect_uri: "http://localhost",
// 		expires_in: "31536000",
// 	})}`;
// 	console.log(oauthurl);
// 	Linking.openURL(oauthurl).catch((err) =>
// 		console.error("Error processing linking", err)
// 	);
// 	Linking.addEventListener('url', ({url}) => {
// 		const
// 	})
// }

const access_token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JCSzUiLCJzdWIiOiI5TEJSUEMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjMyOTk0NTk3LCJpYXQiOjE2MzI0MDc4Nzd9.Zd-O9Yz4Z2qBxlxqEoRQ02AzuWKA0AYdDqnUrnYNUDs`;

const Dashboard = () => {
	const [profileData, setProfileData] = useState([]);
	const [sleepData, setSleepData] = useState();
	const [heartData, setHeartData] = useState();

	const oAuthClick = () => {
		// OAuth(config.client_id, getData);
		// getData(access_token);
	};

	function getData(access_token) {
		fetch("https://api.fitbit.com/1/user/-/profile.json", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			// body: `root=auto&path=${Math.random()}`
		})
			.then((res) => res.json())
			.then((res) => {
				// console.log(`res: ${JSON.stringify(res)}`);
				setProfileData(res);
			})
			.catch((err) => {
				console.error("Error: ", err);
			});
	}

	useEffect(() => {
		getData(access_token);
	}, []);

	// useEffect(() => {
	// 	{
	// 		profileData
	// 			? console.log(profileData.user)
	// 			: console.log("Not loaded");
	// 	}
	// }, [profileData]);

	// ACTIVITY
	// GET https://api.fitbit.com/1/user/[user-id]/activities/date/[date].json

	// SLEEP
	// GET https://api.fitbit.com/1.2/user/-/sleep/list.json

	// useEffect(() => {
	// 	fetch(
	// 		"https://api.fitbit.com/1.2/user/-/sleep/list.json?afterDate=2017-03-27&sort=desc&offset=0&limit=1",
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				Authorization: `Bearer ${access_token}`,
	// 			},
	// 			// body: `root=auto&path=${Math.random()}`
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			// console.log(`res (sleep): ${JSON.stringify(res)}`);
	// 			setSleepData(res);
	// 		})
	// 		.catch((err) => {
	// 			console.error("Error: ", err);
	// 		});
	// }, []);

	// // HEART RATE
	// useEffect(() => {
	// 	fetch(
	// 		"https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json",
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				Authorization: `Bearer ${access_token}`,
	// 			},
	// 			// body: `root=auto&path=${Math.random()}`
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			// console.log(`res (heart rate): ${JSON.stringify(res)}`);
	// 			setHeartData(res);
	// 		})
	// 		.catch((err) => {
	// 			console.error("Error: ", err);
	// 		});
	// }, []);

	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<ScrollView
				style={styles.scrollViewDashboard}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.mainContainer}>
					<Text style={styles.textHeader}>
						{profileData && console.log(profileData?.user?.age)}
					</Text>
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
					<Text style={styles.userSectionName}></Text>
				</View>
				<View style={styles.favoritesHeader}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						Favorites
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: "#2D14C4",
							padding: 5,
							paddingLeft: 8,
							paddingRight: 8,
							color: "white",
							fontSize: 12,
							fontWeight: 800,
							fontFamily: "sans-serif",
							borderRadius: 20,
						}}
					>
						<Text style={styles.favoriteText}>Edit</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.fatigueSection}>
					<View style={styles.fatigueSectionHeader}>
						<Text style={{ fontSize: 15, fontWeight: "800" }}>
							Overall Fatigue
						</Text>
					</View>
					<View style={styles.fatigueSectionData}>
						<Text style={{ fontSize: 35, fontWeight: "900" }}>
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
				<DashboardFavorites />
				<TouchableOpacity
					style={styles.fitbitConnectBtn}
					onPress={oAuthClick}
				>
					<Text style={{ textAlign: "center" }}>
						Connect to Fitbit Account
					</Text>
				</TouchableOpacity>
			</ScrollView>
			<DashboardMenu />
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
		alignContent: "center",
		textAlign: "left",
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
		textAlign: "center",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 50,
		backgroundColor: "white",
		borderRadius: 20,
		height: 90,
		padding: 20,
		// shadowColor: "gray",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 7,
		// },
		// shadowOpacity: 1,
		// shadowRadius: 4,
		// elevation: 20,
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
	favoritesHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	favoriteText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 17,
	},
	scrollViewDashboard: {
		padding: 0,
	},
	fitbitConnectBtn: {
		marginBottom: 100,
		backgroundColor: "#C5C5C5",
		padding: 10,
		textAlign: "center",
		alignContent: "center",
		display: "flex",
		justifyContent: "center",
		marginTop: 10,
		borderRadius: 20,
	},
});
