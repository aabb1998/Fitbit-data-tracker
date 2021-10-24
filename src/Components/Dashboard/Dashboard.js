import React, { useEffect, useState, FunctionComponent } from "react";
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
import { WebView, WebViewNavigation } from "react-native-webview";
import URLParse from "url-parse";
import FitbitWebView from "../FitbitWebView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "../../firebase/config";

const Dashboard = ({ navigation }) => {
	const [profileData, setProfileData] = useState([]);
	const [sleepData, setSleepData] = useState();
	const [heartData, setHeartData] = useState();
	const [userInfo, setUserInfo] = useState({});
	const [userToken, setUserToken] = useState("");

	function getData() {
		fetch("https://api.fitbit.com/1/user/-/profile.json", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${userToken}`,
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

	const generateDay = () => {
		var max = Math.floor(27);
		var min = Math.ceil(1);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateMonth = () => {
		var max = Math.floor(8);
		var min = Math.ceil(10);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateTime = () => {
		var max = Math.floor(18000000);
		var min = Math.ceil(29000000);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateStartTime = () => {
		var max = Math.floor(1);
		var min = Math.ceil(3);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const pushSleep = () => {
		const randomDate = generateDay();
		const randomMonth = generateMonth();
		const randomTime = generateTime();
		const randomStart = generateStartTime();
		fetch(
			`https://api.fitbit.com/1.2/user/-/sleep.json?date=2021-${randomMonth}-${randomDate}&startTime=0${randomStart}:10&duration=${randomTime}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
				// body: `root=auto&path=${Math.random()}`
			}
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(`res: ${JSON.stringify(res)}`);
			})
			.catch((err) => {
				console.error("Error: ", err);
			});
	};

	// useEffect(() => {
	// 	pushSleep();
	// }, [profileData]);

	const getUserUID = () => {
		const getID = () => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					setUserInfo(user);
				}
			});
		};
		getID();
	};
	getUserUID();

	useEffect(() => {
		if (userInfo.uid) {
			const findUserToken = async () => {
				// console.log(userInfo.uid);
				const userDoc = await firebase
					.firestore()
					.collection("users")
					.doc(userInfo.uid)
					.onSnapshot((documentSnapshot) => {
						setUserToken(documentSnapshot.data().token);
					});
			};
			findUserToken();
		}
	}, [userInfo]);

	useEffect(() => {
		getData();
		// console.log(userToken);
	}, [userToken]);

	useEffect(() => {
		// console.log(profileData);
	}, [profileData]);

	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				// console.log("User signed out");
				navigation.navigate("Login");
			});
	};

	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<ScrollView
				style={styles.scrollViewDashboard}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.mainContainer}>
					<Text style={styles.textHeader}></Text>
					<Text style={styles.textSmall}>
						Your sleep data is ready to view!
					</Text>
				</View>
				<View style={styles.userSection}>
					<Image
						style={styles.profileImg}
						source={{
							uri: "https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png",
						}}
					/>
					<View>
						<Text>Welcome back,</Text>
						<Text style={styles.userSectionName}>
							{profileData?.user?.fullName}
						</Text>
					</View>

					<Text style={styles.userSectionName}></Text>
				</View>
				<View style={styles.fatigueSection}>
					<View style={styles.fatigueSectionHeader}>
						<Text style={{ fontSize: 20, fontWeight: "800" }}>
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
				<View style={styles.vasSection}>
					<View style={styles.vasSectionHeader}>
						<Text style={{ fontSize: 20, fontWeight: "900" }}>
							Stress Assessment
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
							onPress={() => navigation.navigate("VAS")}
						>
							<Text style={styles.favoriteText}>BEGIN</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							display: "flex",
							justifyContent: "center",
							marginLeft: 50,
						}}
					>
						<Text>You're due for your stress assessment!</Text>
					</View>
				</View>
				<View style={styles.vasSection}>
					<View style={styles.vasSectionHeader}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "900",
								width: 220,
							}}
						>
							Psychomotor Vigilence Test
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
							onPress={() => navigation.navigate("PVT")}
						>
							<Text style={styles.favoriteText}>START PVT</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							display: "flex",
							justifyContent: "center",
							marginLeft: 70,
						}}
					>
						<Text>PVT last completed on 12/10/21</Text>
					</View>
				</View>
				<View style={styles.fitbitSection}>
					<View style={styles.vasSectionHeader}>
						<Text style={{ fontSize: 20, fontWeight: "900" }}>
							Fitbit Account
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
							onPress={() => navigation.navigate("fitbitView")}
						>
							<Text style={styles.favoriteText}>CONNECT</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
							alignContent: "center",
							marginLeft: 40,
						}}
					>
						<Text>
							Data not loading? Re-connect your fitbit account.
						</Text>
					</View>
				</View>
				{/* <DashboardFavorites /> */}
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
	vasSection: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		height: 120,
		marginTop: 20,
	},
	fitbitSection: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		height: 120,
		marginTop: 20,
		marginBottom: 100,
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
	vasSectionHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		textAlign: "center",
		marginBottom: 20,
		alignItems: "flex-start",
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
		width: 200,
	},
	fitbitButton: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
});
