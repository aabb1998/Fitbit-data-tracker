import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import journal from "./src/Assets/Dashboard/journal_white.png";
import activity from "./src/Assets/Dashboard/activity.png";
import Journal from "./src/Components/Journal/Journal";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tabs = createMaterialTopTabNavigator()

const footerConfig = {
    tabBarPosition: 'bottom',
}

const MyFooter = () => (
    <Tabs.Navigator {...footerConfig}>
        <Tabs.Screen name="Dashboard" component={Dashboard}>
			{/* <Image style={styles.NavButtonOn} source={activity}/> */}
		</Tabs.Screen>
        <Tabs.Screen name="Journal" component={Journal} >
			{/* <Image style={styles.NavButtonOn} source={activity}/> */}
		</Tabs.Screen>
    </Tabs.Navigator>
)

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Tabs" component={MyFooter} />
				{/* user ? (
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
							name="Journal"
							options={{ headerLeft: false }}
							component={Journal}
						/>
					</>
				) */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	NavMenu: {
	  width: "100%",
	  display: "flex",
	  flexDirection: "row",
	  justifyContent: "space-around",
	  backgroundColor: "#2D14C4",
	  padding: 20,
	  borderRadius: 30,
	  color: "white",
	},
	NavButtonOff: {
	  width: 20,
	  height: 20,
	  opacity: 0.4,
	  backgroundColor: "#2D14C4",
	},
	NavButtonOn: {
	  width: 20,
	  height: 20,
	  opacity: 1,
	  backgroundColor: "#2D14C4",
	},
  });
