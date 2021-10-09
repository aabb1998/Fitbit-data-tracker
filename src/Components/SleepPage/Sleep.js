import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	ScrollView,
	StatusBar,
	FlatList,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import DashboardFavorites from "../Dashboard/DashboardFavorites/DashboardFavorites";
import DashboardMenu from "../Dashboard/DashboardMenu";
import { firebase } from "../../firebase/config";
import SleepData from "./SleepData/SleepData";
import backArrow from "../../Assets/Dashboard/backArrow.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const Sleep = ({ navigation }) => {
	const [userId, setUserId] = useState("");
	const [userToken, setUserToken] = useState("");
	const [userSleepData, setUserSleepData] = useState([]);

	const getUserID = () => {
		const getID = () => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					setUserId(user.uid);
				}
			});
		};
		console.log(userId);
		getID();
	};

	const getUserToken = () => {
		if (userId) {
			const findUserToken = async () => {
				// console.log(userInfo.uid);
				const userDoc = await firebase
					.firestore()
					.collection("users")
					.doc(userId)
					.onSnapshot((documentSnapshot) => {
						setUserToken(documentSnapshot.data().token);
					});
			};
			findUserToken();
		}
	};

	const getSleepData = () => {
		fetch(
			"https://api.fitbit.com/1.2/user/-/sleep/date/2021-08-01/2021-10-06.json",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
				// body: `root=auto&path=${Math.random()}`
			}
		)
			.then((res) => res.json())
			.then((res) => {
				// console.log(`res: ${JSON.stringify(res)}`);
				setUserSleepData(res);
			})
			.catch((err) => {
				console.error("Error: ", err);
			});
	};

	useEffect(() => {
		getUserID();
	}, []);

	useEffect(() => {
		// console.log(
		// 	userSleepData?.sleep?.map((sleep) => ({
		// 		date: sleep.dateOfSleep,
		// 		duration: sleep.duration,
		// 		efficiency: sleep.efficiency,
		// 	}))
		// );
		// console.log(userSleepData?.sleep);
	}, [userSleepData]);

	useEffect(() => {
		console.log(userToken);
		getSleepData();
	}, [userToken]);

	useEffect(() => {
		console.log(userId);
		getUserToken();
	}, [userId]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topContainer}>
				<View style={styles.textHeader}>
					<TouchableOpacity>
						<Image style={styles.imagestyle} source={backArrow} />
					</TouchableOpacity>
					<Text style={styles.textHeaderText}>Sleep Data</Text>
				</View>
				<View>
					<Text>Score</Text>
				</View>
			</View>

			<ScrollView style={styles.sleepDataScroll}>
				{userSleepData &&
					userSleepData?.sleep?.map((sleep) => (
						<SleepData
							key={sleep.logId}
							date={sleep.dateOfSleep}
							duration={sleep.duration}
							efficiency={sleep.efficiency}
						/>
					))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Sleep;

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
	},
	textHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	textHeaderText: {
		fontSize: 20,
		fontFamily: "sans-serif",
		marginLeft: 130,
		color: "white",
		marginTop: 10,
	},
	imagestyle: {
		position: "relative",
		width: 20,
		height: 20,
		marginLeft: 10,
		marginTop: 10,
	},
	topContainer: {
		backgroundColor: "#342F69",
		height: 300,
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20,
	},
	sleepDataScroll: {
		marginBottom: 60,
		position: "relative",
		top: -40,
	},
});
