import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	ScrollView,
	StatusBar,
	FlatList,
	View,
} from "react-native";
import DashboardFavorites from "../Dashboard/DashboardFavorites/DashboardFavorites";
import DashboardMenu from "../Dashboard/DashboardMenu";
import { firebase } from "../../firebase/config";
import SleepData from "./SleepData/SleepData";

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
			<View>
				{userSleepData &&
					userSleepData?.sleep?.map((sleep) => (
						<SleepData
							date={sleep.dateOfSleep}
							duration={sleep.duration}
							efficiency={sleep.efficiency}
						/>
					))}
			</View>
		</SafeAreaView>
	);
};

export default Sleep;

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		textAlign: "left",
	},
});
