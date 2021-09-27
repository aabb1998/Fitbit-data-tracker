import "react-native-gesture-handler";
import React, { useEffect, useState, Component } from "react";
import { Text, StyleSheet, View, Linking } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import FitbitWebView from "./src/Components/FitbitWebView";

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
				{/* {user ? (
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
					</>
				)} */}
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="fitbitView" component={FitbitWebView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
