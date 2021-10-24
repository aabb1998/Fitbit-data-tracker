import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import { LinearGradient } from 'expo-linear-gradient';

export default function NotificationScreen({ navigation }) {

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
					email: email,
					fullName: fullName,
				};
				console.log(uid);

				firebase
					.firestore()
					.collection("users")
					.doc(uid)
					.set({
						id: uid,
						email: email,
						fullName: fullName,
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
				navigation.navigate("Login", {});

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
			      source={require("../../../assets/notification.png")}
			    />
				<TouchableOpacity style={styles.button} onPress={() => this.showNotification()}>
                    <Text style={styles.buttonText}>Receive Survey Reminders</Text>
                </TouchableOpacity>
				
                <TouchableOpacity style={styles.button} onPress={() => this.showNotification()}>
                    <Text style={styles.buttonText}>Receive Sleep Data Updates</Text>
                </TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => this.showNotification()}>
                    <Text style={styles.buttonText}>Receive PVT Reminders</Text>
                </TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => this.showNotification()}>
                    <Text style={styles.buttonText}>Unsubscribe</Text>
                </TouchableOpacity>


				</KeyboardAwareScrollView>
			</LinearGradient>
		</View>
	);
}