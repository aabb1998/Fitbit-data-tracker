import React, { useState } from "react";
import { StyleSheet, Image, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "../../firebase/config";


const NotificationScreen = () => {

	toggleSwitch = (switchNumber) => {
		this.setState({
		  activeSwitch: switchNumber === this.state.activeSwitch ? null : switchNumber
		})
	  };

	  switchOne = (value) => { this.toggleSwitch(1) };
	  switchTwo = (value) => { this.toggleSwitch(2) };
	  switchThree = (value) => { this.toggleSwitch(3) };

	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Notificatons</Text>
			</View>
			<Image
				style={styles.logo}
				source={require("../../../assets/notification.png")}
				/>
			<View style={styles.notifySection}>
			<Switch
             onValueChange={this.switchOne}
             value={this.state.activeSwitch === 1}
             />
            <Switch
             onValueChange={this.switchTwo}
             value={this.state.activeSwitch === 2}
             />
           <Switch
             onValueChange={this.switchThree}
             value={this.state.activeSwitch === 3}
            />
			</View>
		</SafeAreaView>
	)

}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		textAlign: "left",
	},
	title: {
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	logo: {
		flex: 1,
		height: 300,
		width: 200,
		alignSelf: "left-center",
		margin: 10,
		resizeMode: 'contain',
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: "hidden",
		backgroundColor: "white",
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	notifySection:{
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		textAlign: "center",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 50,
		backgroundColor: "white",
		borderRadius: 20,
		height: 90,
		padding: 20,
		shadowColor: "gray",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 20,
	},
	button: {
		backgroundColor: "#6C60CC",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	footerView: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: "#FFFFFF",
	},
	footerLink: {
		color: "#788eec",
		fontWeight: "bold",
		fontSize: 16,
	},
});