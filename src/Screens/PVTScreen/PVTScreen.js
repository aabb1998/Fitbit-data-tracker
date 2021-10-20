import React from "react";
import SimpleCircleButton from "./SimpleCircleButton";
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Dimensions,
	Image,
	TouchableOpacity,
} from "react-native";
import backButton from "../../Assets/Dashboard/backArrow.png";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const devHeight = Dimensions.get("window").height;
const devWidth = Dimensions.get("window").width;

export default function PVTScreen(props) {
	let localStyles = styles;
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textHeader}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Dashboard")}
				>
					<Image style={styles.imagestyle} source={backButton} />
				</TouchableOpacity>
				<Text style={styles.textHeaderText}>PVT Test</Text>
			</View>
			<View style={localStyles.instructionContainer}>
				{/* <Text style={localStyles.heading}>Instructions</Text> */}
				<View style={localStyles.instructionView}>
					<Text style={localStyles.instruction}>
						1. Click the green gutton to start
					</Text>
				</View>

				<View style={localStyles.instructionView}>
					<Text style={localStyles.instruction}>
						2. Wait for change from red to green
					</Text>
				</View>
				<View style={localStyles.instructionView}>
					<Text style={localStyles.instruction}>
						3. Click the button once green appears
					</Text>
				</View>
				<View style={localStyles.instructionView}>
					<Text style={localStyles.instruction}>
						4. Click 'End Test' to end the test early
					</Text>
				</View>
			</View>
			<View style={localStyles.contentContainer}>
				<SimpleCircleButton />
				<TouchableOpacity style={localStyles.button}>
					<Text style={{ color: "white" }}>End Test</Text>
				</TouchableOpacity>
			</View>
			<View style={localStyles.resultContainer}>
				<Text style={localStyles.heading}>Response Time: 0.345</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		position: "relative",
		zIndex: 0,
		//backgroundColor: 'rgba(3,168,203,1)', //add a background to highlight the touchable area
		alignItems: "center",
		// marginBottom: devHeight / 10,
	},
	button: {
		color: "white",
		backgroundColor: "black",
		padding: 10,
		borderRadius: 20,
	},
	instructionContainer: {
		// position: "relative",
		// zIndex: 0,
		// //backgroundColor: 'rgba(160,95,28,1)', //add a background to highlight the touchable area
		// marginTop: devHeight / 40,
		// marginBottom: devHeight / 20,
		// paddingLeft: devWidth * 0.025,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: 400,
		// alignContent: "center",
		alignItems: "center",
		marginTop: 20,
		marginBottom: 20,
	},
	heading: {
		fontWeight: "bold",
		fontSize: 20,
	},
	instruction: {
		fontSize: 16,
		fontWeight: "500",
		color: "white",
	},
	resultContainer: {
		paddingLeft: devWidth * 0.025,
	},
	textHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	imagestyle: {
		position: "relative",
		width: 20,
		height: 20,
		marginLeft: 10,
		marginTop: 10,
	},
	textHeaderText: {
		fontSize: 20,
		fontFamily: "sans-serif",
		marginLeft: 140,
		color: "black",
		marginTop: 10,
	},
	container: {
		marginTop: 40,
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
	},
	instructionView: {
		backgroundColor: "#2D14C4",
		marginBottom: 5,
		padding: 8,
		width: 300,
		borderRadius: 20,
	},
});
