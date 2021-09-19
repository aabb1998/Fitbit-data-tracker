import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "../../firebase/config";

export default function NotificationScreen({ navigation }) {

    const onNotificationsPress = () => {
		navigation.navigate("Notifications");
	};

}