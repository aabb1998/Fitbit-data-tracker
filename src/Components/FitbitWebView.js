import React, { useEffect, useState, FunctionComponent } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Linking,
	Alert,
} from "react-native";

import qs from "qs";
import { ScrollView } from "react-native-gesture-handler";
import URL from "url-parse";
import { WebView, WebViewNavigation } from "react-native-webview";
import URLParse from "url-parse";
import config from "../../config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";

const FitbitWebView = ({ navigation }) => {
	const [accessToken, setAccessToken] = useState();
	const [accountToken, setAccountToken] = useState("");
	const [userUid, setUserUid] = useState("");
	const [user, setUser] = useState({});
	const [tokenAdded, setTokenAdded] = useState(false);

	useEffect(() => {
		var regex = /[#?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
		while ((match = regex.exec(accessToken))) {
			params[match[1]] = match[2];
		}
		// console.log(params.access_token);
		if (params.access_token) {
			setAccountToken(params.access_token);
			// console.log(params.access_token);
		}
	}, [accessToken]);

	// useEffect(() => {
	// 	// console.log(accountToken);
	// 	// getData(accountToken);
	// }, [accountToken]);

	const onNavigationStateChange = (navigationState) => {
		const url = navigationState.url;
	};

	useEffect(() => {
		const getUserId = () => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					setUserUid(user.uid);
					setUser(user);
				}
			});
		};
		const getUserCollections = async () => {
			const userCollection = await firebase
				.firestore()
				.collection("users")
				.get();
			const docs = userCollection.docs.map((doc) => doc.data());
		};
		getUserCollections();
		getUserId();
	}, []);

	const addUserToDatabase = () => {
		console.log("Adding user to database");
		if (accountToken) {
			firebase.firestore().collection("users").doc(userUid).set({
				email: user.email,
				id: userUid,
				token: accountToken,
			});
		}
	};

	const addTokenToUser = (userID) => {
		console.log("Adding token to current user");
		console.log(accountToken);
		if (accountToken && !tokenAdded) {
			firebase
				.firestore()
				.collection("users")
				.doc(userID)
				.update({
					token: accountToken,
				})
				.then(() => {
					console.log("User token updated");
					setTokenAdded(!tokenAdded);
				});
		}
	};

	useEffect(() => {
		const userID = userUid;
		const findUser = async () => {
			if (userID) {
				const userCheck = await firebase
					.firestore()
					.collection("users")
					.doc(userID)
					.onSnapshot((documentSnapshot) => {
						if (documentSnapshot.data() === undefined) {
							addUserToDatabase();
						} else {
							// console.log("User found in the datrabase");
							if (!tokenAdded) {
								addTokenToUser(userID);
							} else {
								console.log("Token has already been added.");
							}
						}
					});
			}
		};
		findUser();
	}, [accountToken]);

	return (
		<WebView
			source={{
				uri: `https://www.fitbit.com/oauth2/authorize?${qs.stringify({
					client_id: "23BBK5",
					response_type: "token",
					scope: "heartrate activity activity profile sleep",
					redirect_uri: "http://localhost",
					expires_in: "31536000",
				})}`,
			}}
			onNavigationStateChange={onNavigationStateChange}
			onError={(syntheticEvent) => {
				const { nativeEvent } = syntheticEvent;
				// console.log("WebView error: ", nativeEvent);
				// console.log(nativeEvent.url);
				// if (!accessToken) {
				setAccessToken(nativeEvent.url);
				// }
			}}
			onMessage={(event) => Alert.alert("Test")}
			renderError={() => {
				return (
					<View
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: "white",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text style={{ color: "black" }}>
							Your account has been successfully linked.
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor: "#2D14C4",
								padding: 10,
								paddingLeft: 8,
								paddingRight: 8,
								color: "white",
								fontSize: 12,
								fontWeight: 800,
								fontFamily: "sans-serif",
								borderRadius: 20,
								marginTop: 20,
								display: "flex",
								flexDirection: "row",
								width: 200,
								justifyContent: "space-around",
							}}
							onPress={() => navigation.navigate("Dashboard")}
						>
							<Image
								style={styles.returnImg}
								source={{
									uri: "https://img.icons8.com/material-outlined/2x/ffffff/return.png",
								}}
							/>
							<Text style={styles.returnText}>
								Return to dashboard
							</Text>
						</TouchableOpacity>
					</View>
				);
			}}
		/>
	);
};

export default FitbitWebView;

const styles = StyleSheet.create({
	returnText: {
		color: "white",
	},
	returnImg: {
		height: 20,
		width: 20,
	},
});
