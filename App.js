import "react-native-gesture-handler";
import React, { useEffect, useState, Component } from "react";
import { Text, StyleSheet, View, Linking } from "react-native";
import { HomeScreen } from "./PageLoader";
import { LoginScreen } from "./PageLoader";
import { RegistrationScreen } from "./PageLoader";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import FitbitWebView from "./src/Components/FitbitWebView";
import Sleep from "./src/Components/SleepPage/Sleep";
import PVTScreen from "./src/Screens/PVTScreen/PVTScreen";
import VAS from "./src/Screens/SurveyScreen/Vas";
import SurveyList from "./src/Screens/SurveyScreen/Survey-list";
import KSS from "./src/Screens/SurveyScreen/Survey";

// import { decode, encode } from "base-64";
// if (!global.btoa) {
// 	global.btoa = encode;
// }
// if (!global.atob) {
// 	global.atob = decode;
// }

const Stack = createStackNavigator();

export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<Stack.Screen name="Home">
						{(props) => <HomeScreen {...props} extraData={user} />}
					</Stack.Screen>
				) : (
					<>
						<Stack.Screen
							name="Login"
							options={{ headerLeft: false }}
							component={LoginScreen}
						/>
						<Stack.Screen
							name="Registration"
							component={RegistrationScreen}
						/>
						<Stack.Screen
							name="Dashboard"
							options={{ headerLeft: false }}
							component={Dashboard}
						/>
						<Stack.Screen
							name="fitbitView"
							component={FitbitWebView}
						/>
						<Stack.Screen name="Sleep" component={Sleep} />
						<Stack.Screen name="PVT" component={PVTScreen} />
						<Stack.Screen name="VAS" component={VAS} />
						<Stack.Screen name="SurveyList" component={SurveyList} />
						<Stack.Screen name="KSS" component={KSS} />
					</>
				)}
				{/* <Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="fitbitView" component={FitbitWebView} />
				{<Stack.Screen name="Dashboard" component={Dashboard} />} */}
			</Stack.Navigator>
		</NavigationContainer>
		// <PVTScreen></PVTScreen>
	);
}
