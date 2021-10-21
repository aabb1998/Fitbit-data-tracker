import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
	},
	textHeader: {
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "normal",
		justifyContent: "center",
		alignItems: "center",
	},
	textSmall: {
		fontSize: 18,
	},
	bottomContainer: {
		width: "100%",
		height: 80,
		justifyContent: 'flex-end',
		alignItems: "center",
	
	},
	mainContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: "rgb(242,246,249)",
	},
	journalIconSource: {
		width: 20,
		height: 20,
		marginLeft: 5,
	},
	statisticsLogo: {
		width: 19,
		height: 19,
		marginBottom: 6,
	},

	//   Card Design

	cards: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	card: {
		padding: 20,
		fontSize: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 15,
		width: "45%",
		shadowColor: "#bfc2c8",
		shadowOffset: {
			width: -4,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 9.84,

		elevation: 5,
	},

	cardSmallText1: {
		fontSize: 22,
		fontWeight: "bold",
	},

	cardSmallText2: {
		fontSize: 16,
		color: "#999999",
	},

	cardLargeText: {
		fontSize: 34,
		marginTop: 15,
		marginBottom: 15,
		fontWeight: "bold",
		color: "#6979f8",
	},

	// Graph Card

	graphCard: {
		padding: 20,
		fontSize: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 15,
		width: "100%",
		shadowColor: "#bfc2c8",
		shadowOffset: {
			width: -4,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 9.84,

		elevation: 5,
		marginTop: 40,

		alignItems: "flex-start",
	},

	graphCardTitle: {
		fontSize: 22,
		fontWeight: "bold",
	},

	graphCardList: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 10,
		marginBottom: 10,
	},

	graphCardListItem: {
		fontSize: 17,
		color: "#6979f8",
		opacity: 0.6,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
	},

	graphCardListItemActive: {
		opacity: 1,
		borderBottomWidth: 6,
		borderBottomColor: "#6979f8",
	},

	chart: {
		// overflow: "hidden",
		width: "100%",
		marginLeft: -35,
		marginTop: 20,
		backgroundColor: "#ffffff00",
	},
	button: {
		backgroundColor: "#6C60CC",
		marginLeft: 10,
		marginRight: 10,
		width: 200,
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
	floatingMenu: {
		position: "absolute",
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#2D14C4",
		padding: 20,
		borderRadius: 30,
		color: "white",
		bottom: 10,
	},
	floatingMenuImage: {
		width: 20,
		height: 20,
		opacity: 0.4,
	},
	floatingMenuImage3: {
		width: 20,
		height: 20,
		opacity: 1,
	},
});
