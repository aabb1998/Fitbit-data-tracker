import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";
//import * from "../../firebase/config";
import { LinearGradient } from 'expo-linear-gradient';

export default function RegistrationScreen({ navigation }) {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onFooterLinkPress = () => {
		navigation.navigate("Login");
	};

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const data = {
					id: uid,
					email:email ,
					fullName:fullName,
				};
				console.log(uid);

                //firebase.createUser(data);
				firebase
				.firestore()
				.collection("users")
				.doc(uid)
				.set({
					id: uid,
					email:email ,
					fullName:fullName,
				})
				.then(() => {
					//navigation.navigate("Home",{email:email,id:uid});
					console.log("Document successfully written!");
				})
				.catch((error) => {
					alert(error);
					//console.error("Error writing document: ", error);
				});

				//navigation.navigate("Home",{email:email,id:uid});
				navigation.navigate("Login",{});

			})
			.catch((error) => {
				alert(error);
			});
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
					placeholder="Full Name"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setFullName(text)}
					value={fullName}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
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
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Confirm Password"
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onRegisterPress()}
				>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?{" "}
						<Text
							onPress={onFooterLinkPress}
							style={styles.footerLink}
						>
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
			</LinearGradient>
		</View>
	);
}
