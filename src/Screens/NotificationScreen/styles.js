import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
		alignSelf: "center",
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
