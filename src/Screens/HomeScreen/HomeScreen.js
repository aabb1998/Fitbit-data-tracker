import React from "react";
import { Text, View, TouchableOpacity,ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import { firebase } from "../../firebase/config";
import { Updates } from 'expo';
export default function HomeScreen({ navigation }) {
	
	const onLoginPress = () => {
		firebase
			.auth()
			.signOut()
			.then((response) => {
				// navigation.navigate("Login");
				//Updates.reload()
				navigation.navigate("Login",{});


			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<ScrollView>
		<View style={styles.container}>
			<LinearGradient
				style={{ flex: 1, width: "100%" }}
				colors={['#47268A', '#1D1141', '#5B1461']}>
				<KeyboardAwareScrollView
					style={{ flex: 1, width: "100%" }}
					keyboardShouldPersistTaps="always">


					<TouchableOpacity
						style={styles.button}
						onPress={() => onLoginPress()}
					>
						<Text style={styles.buttonTitle}>Log out</Text>
					</TouchableOpacity>

				</KeyboardAwareScrollView>
			</LinearGradient>

		</View>
		</ScrollView>

	);
}
