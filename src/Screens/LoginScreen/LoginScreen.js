import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { firebase } from "../../firebase/config";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onFooterLinkPress = () => {
		navigation.navigate("Registration");
	};

	const onLoginPress = () => { 
		
		if (email == "") {
			alert("Please enter email");
			return;
		}
		else if(password==""){
			alert("Please enter password");
			return;
		}
		else {

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				//navigation.navigate("Home",{email:email,id:documentSnapshot.data()});
				const uid = response.user.uid;
				navigation.navigate("Home",{email:email,id:uid});

				
				  
			})
			.catch((error) => {
				alert(error);
			});

		}

	};

	return (


		<View style={styles.container}>
			<LinearGradient
				style={{ flex: 1, width: "100%" }}
				colors={['#47268A', '#1D1141', '#5B1461']}>
				<KeyboardAwareScrollView
					style={{ flex: 1, width: "100%" }}
					keyboardShouldPersistTaps="always"
				>
					<Image
						style={styles.logo}
						source={require("../../../assets/icon.png")}
					/>
					<TextInput
						style={styles.input}
						placeholder="E-mail"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEmail(text)}
						value={email}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#aaaaaa"
						secureTextEntry
						placeholder="Password"
						onChangeText={(text) => setPassword(text)}
						value={password}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => onLoginPress()}
					>
						<Text style={styles.buttonTitle}>Log in</Text>
					</TouchableOpacity>
					<View style={styles.footerView}>
						<Text style={styles.footerText}>
							Don't have an account?{" "}
							<Text
								onPress={onFooterLinkPress}
								style={styles.footerLink}
							>
								Sign up
							</Text>
						</Text>
					</View>
				</KeyboardAwareScrollView>
			</LinearGradient>

		</View>

	);
}
