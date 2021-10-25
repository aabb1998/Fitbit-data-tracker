import React from "react";
<<<<<<< HEAD
import { StyleSheet, View, Image, Pressable } from "react-native";
=======
import { StyleSheet, Text, View, Image } from "react-native";
>>>>>>> main
import bed from "../../Assets/Dashboard/bed.png";
import heartRate from "../../Assets/Dashboard/heart-rate.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal.png";
import activity from "../../Assets/Dashboard/activity.png";
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Journal from "../../Components/Journal/Journal";
import Dashboard from "././././Dashboard";

// const Tabs = createMaterialTopTabNavigator()
=======
import timer from "../../Assets/Dashboard/timer.png";
import exit from "../../Assets/Dashboard/exit.png";

import notifications from "../../Assets/Dashboard/notifications.png";
import survey from "../../Assets/Dashboard/survey.png";

import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../firebase/config";

import { StackNavigator } from "react-navigation";

import Sleep from "../SleepPage/Sleep";

const DashboardMenu = () => {
	const navigation = useNavigation();
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
		<View>
			<View style={styles.floatingMenu}>
				<TouchableOpacity onPress={() => navigation.navigate("SurveyList")}>
					<Image style={styles.floatingMenuImage} source={survey} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.floatingMenuImage3}
						source={notifications}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Sleep")}>
					<Image style={styles.floatingMenuImage} source={bedwhite} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("PVT")}>
					<Image style={styles.floatingMenuImage} source={timer} />
				</TouchableOpacity>
				<TouchableOpacity onPress={signOut}>
					<Image style={styles.floatingMenuImage} source={exit} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
>>>>>>> main

// const MyFooter = () => (
//     <Tabs.Navigator>
//         <Tabs.Screen name="Dashboard" component={Dashboard} 
//           style={styles.NavButtonOn} source={activity} />
//         <Tabs.Screen name="Journal" component={Journal} 
//           style={styles.NavButtonOn} source={journal} />
//     </Tabs.Navigator>
// )
// const stackConfig = {
//   headerMode: 'none',
// }

<<<<<<< HEAD
// const Stack = createStackNavigator()
  
// const DashboardMenu = () => {
//   // const onActivityPress = () => {
//   //   navigation.navigate("Dashboard");
//   // };

//   // const onJournalPress = () => {
//   //   navigation.navigate("Journal");
//   // };
//   return (
//       <NavigationContainer style={styles.NavMenu}>
//         <Stack.Navigator {...stackConfig}>
//           <Stack.Screen name="Tabs" component={MyFooter} />
//         </Stack.Navigator>
//       </NavigationContainer>

//     //   <View style={styles.NavMenu}>
//     //     <Image 
//     //       style={styles.NavButtonOff} 
//     //       source={bedwhite} 
//     //     />
//     //     <Pressable 
//     //       onPress={() => onJournalPress()}>
//     //       <Image 
//     //         style={styles.NavButtonOn} 
//     //         source={journal} 
//     //       />
//     //     </Pressable>
//     //     <Image 
//     //       style={styles.NavButtonOff} 
//     //       source={heartWhite} 
//     //     />
//     //     <Pressable 
//     //       onPress={() => onActivityPress()}>
//     //       <Image 
//     //         style={styles.NavButtonOff} 
//     //         source={activity} 
//     //       />
//     //     </Pressable>
//     // </View>
//   );
// }

// export default DashboardMenu;

// const styles = StyleSheet.create({
//   NavMenu: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#2D14C4",
//     padding: 20,
//     borderRadius: 30,
//     color: "white",
//   },
//   NavButtonOff: {
//     width: 20,
//     height: 20,
//     opacity: 0.4,
//   },
//   NavButtonOn: {
//     width: 20,
//     height: 20,
//     opacity: 1,
//   },
// });
=======
const styles = StyleSheet.create({
	floatingMenu: {
		position: "absolute",
		alignContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#2D14C4",
		padding: 20,
		borderRadius: 30,
		color: "white",
		bottom: 10,
		zIndex: 2,
		width: "100%",
	},
	floatingMenuImage: {
		width: 20,
		height: 20,
		opacity: 1,
	},
	floatingMenuImage3: {
		width: 20,
		height: 20,
		opacity: 1,
	},
});
>>>>>>> main
