import "react-native-gesture-handler";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Text, StyleSheet,Image } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import journal from "./src/Assets/Dashboard/journal_white.png";
import activity from "./src/Assets/Dashboard/activity.png";
import Journal from "./src/Components/Journal/Journal";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import Tabs from "./src/Navigation/Tabs";
=======
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
import KSSGraph from "./src/Screens/SurveyScreen/KSS-Graph";
import VASGraph from "./src/Screens/SurveyScreen/VAS-Graph";

// import { decode, encode } from "base-64";
// if (!global.btoa) {
// 	global.btoa = encode;
// }
// if (!global.atob) {
// 	global.atob = decode;
// }
>>>>>>> main

const Stack = createStackNavigator();

export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

<<<<<<< HEAD
  return (
	  <NavigationContainer>
		  <Tabs />
	  </NavigationContainer>
  );
	// return (
	// 	<NavigationContainer>
	// 		<Tab.Navigator
	// 			tabBarOptions = {{
	// 				pressOpacity: 0.6,
	// 				showLabel: false,
	// 				style:{
	// 					position: 'absolute',
	// 					display: "flex",
	// 					backgroundColor: "#2D14C4",
	// 					padding: 20,
	// 					borderRadius: 30,
	// 				}
	// 			}}
	// 			initialRouteName="Dashboard"
	// 			screenOptions={{
	// 				tabBarActiveTintColor: '#020202',
	// 				tabBarInactiveBackgroundColor:'#8f89e3',
	// 			}}
	// 		>
	// 			<Tab.Screen 
	// 				name="Dashboard" 
	// 				component={Dashboard}
	// 				options={{
	// 					tabBarIcon: ({focused}) => (
	// 						<Image style={{tintColor: focused ? '#2D14C4':'white',
	// 						...styles.NavIcon}} source={activity}/>
	// 					),
	// 				  }}
	// 			/>
	// 			<Tab.Screen 
	// 				name="Journal" 
	// 				component={Journal} 
	// 				options={{
	// 					tabBarIcon: ({focused}) => (
	// 						<Image style={styles.NavIcon} source={journal}/>
	// 					),
	// 				  }}
	// 			/>
	// 		</Tab.Navigator>
	// 			{/* user ? (
	// 				<Stack.Screen name="Home">
	// 					{(props) => <HomeScreen {...props} extraData={user} />}
	// 				</Stack.Screen>
	// 			) : (
	// 				<>
	// 					<Stack.Screen
	// 						name="Login"
	// 						options={{ headerLeft: false }}
	// 						component={LoginScreen}
	// 					/>
	// 					<Stack.Screen
	// 						name="Registration"
	// 						component={RegistrationScreen}
	// 					/>
	// 					<Stack.Screen
	// 						name="Dashboard"
	// 						options={{ headerLeft: false }}
	// 						component={Dashboard}
	// 					/>
    //         			<Stack.Screen
	// 						name="Journal"
	// 						options={{ headerLeft: false }}
	// 						component={Journal}
	// 					/>
	// 				</>
	// 			) */}
	// 		{/* </Stack.Navigator> */}
	// 	</NavigationContainer>
	// );
=======
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
						<Stack.Screen name="KSSGraph" component={KSSGraph} />
						<Stack.Screen name="VASGraph" component={VASGraph} />

					</>
				)}
				{/* <Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="fitbitView" component={FitbitWebView} />
				{<Stack.Screen name="Dashboard" component={Dashboard} />} */}
			</Stack.Navigator>
		</NavigationContainer>
		// <PVTScreen></PVTScreen>
	);
>>>>>>> main
}

const styles = StyleSheet.create({
	NavMenu:{
		position: 'absolute',
		pressOpacity: 0.6,
		showLabel: false,
		style:{
			width: "100%",
			display: "flex",
			backgroundColor: "#2D14C4",
			padding: 20,
			borderRadius: 30,
		}
	},
	NavIcon: {
	  width: 20,
	  height: 20,
	  backgroundColor: "#2D14C4",
	},
  });
