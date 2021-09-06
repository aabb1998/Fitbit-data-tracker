import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Survey from './src/Screens/SurveyScreen/SurveyScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Survey
      </Text>
      <Card>
        <Survey1/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


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
			<Text>Hello</Text>
			<Stack.Navigator>
				{user ? (
					<Stack.Screen name="Home">
						{(props) => <HomeScreen {...props} extraData={user} />}
					</Stack.Screen>
				) : (
					<>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen
							name="Registration"
							component={RegistrationScreen}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
