import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import bed from "../../Assets/Dashboard/bed.png";
import heartRate from "../../Assets/Dashboard/heart-rate.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal.png";
import activity from "../../Assets/Dashboard/activity.png";
import SurveyScreen from "../../Screens/SurveyScreen/SurveyScreen.js";

const Stack = createStackNavigator();
function DashboardMenu ({ navigation }) {
	return (
	<NavigationContainer>
	<Stack.Navigator>
		<View style={styles.floatingMenu}>
			<Image style={styles.floatingMenuImage} source={bedwhite} />
			<TouchableOpacity onPress={()=>navigation.navigate("SurveyScreen")}>
			<Image style={styles.floatingMenuImage} source={journal}/>
			</TouchableOpacity>
			<Image style={styles.floatingMenuImage} source={heartWhite} />
			<Image style={styles.floatingMenuImage3} source={activity} />
		</View>
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default DashboardMenu;

const styles = StyleSheet.create({
	floatingMenu: {
		position: "absolute",
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#2D14C4",
		padding: 20,
		borderRadius: 30,
		color: "white",
		bottom: 10,
	},
	floatingMenuImage: {
		width: 20,
		height: 20,
		opacity: 0.4,
	},
	floatingMenuImage3: {
		width: 20,
		height: 20,
		opacity: 1,
	},
});
