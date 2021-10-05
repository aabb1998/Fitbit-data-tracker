import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "../../firebase/config";


const NotificationScreen = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Notificatons</Text>
			</View>
		</SafeAreaView>
	)

}