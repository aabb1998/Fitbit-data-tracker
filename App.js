import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import PSS from './src/Screens/SurveyScreen/PSS.survey';
import STAI from './src/Screens/SurveyScreen/STAI.survey';
import { GraphScreen } from "./Index";

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
							name="Graph"
							options={{ headerLeft: false }}
							component={GraphScreen}
						/>
						<Stack.Screen
							name="PSS"
							options={{
								headerShown: true,
							  }}
							component={PSS}
						/>
						<Stack.Screen
							name="STAI"
							options={{
								headerShown: true,
							  }}
							component={STAI}
						/>



					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>

	);
}
