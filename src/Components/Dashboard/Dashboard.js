import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import DashboardFavorites from "./DashboardFavorites/DashboardFavorites";
import DashboardMenu from "./DashboardMenu";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal_white.png";
import activity from "../../Assets/Dashboard/activity.png";

export default function Dashboard ({ navigation }) {
	// const onJournalPress = () => {
	// 	navigation.navigate("Journal");
	//   };

	return (
		<SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
			<View style={styles.mainContainer}>
				<Text style={styles.textHeader}>Welcome Back</Text>
				<Text style={styles.textSmall}>
					Your sleep data is ready to view!
				</Text>
			</View>
			<View style={styles.userSection}>
				<Image
					style={styles.profileImg}
					source={{
						uri: "https://media-exp1.licdn.com/dms/image/C5603AQFQY_gG-DCSuw/profile-displayphoto-shrink_200_200/0/1599099548476?e=1636588800&v=beta&t=BVdy-GEPdujawBjWCF_vyaED5d9jm8mG8FLu3ahSTBg",
					}}
				/>
				<Text style={styles.userSectionName}>Abdul Abbou</Text>
			</View>
			<View style={styles.favoritesHeader}>
				<Text style={{ fontSize: 18, fontWeight: "bold" }}>
					Favorites
				</Text>
				<TouchableOpacity
					style={{
						backgroundColor: "#2D14C4",
						padding: 5,
						paddingLeft: 8,
						paddingRight: 8,
						color: "white",
						fontSize: 12,
						fontWeight: 800,
						fontFamily: "sans-serif",
						borderRadius: 20,
					}}
				>
					<Text>Edit</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fatigueSection}>
				<View style={styles.fatigueSectionHeader}>
					<Text style={{ fontSize: 15, fontWeight: "800" }}>
						Overall Fatigue
					</Text>
				</View>
				<View style={styles.fatigueSectionData}>
					<Text style={{ fontSize: 35, fontWeight: "900" }}>
						5<Text style={{ fontSize: 18 }}>th</Text>
					</Text>
					<Image
						style={{ width: 150, height: 50 }}
						source={{
							uri: "https://i.gyazo.com/68041204d46ddcfa528ff4d6a5bd0f15.png",
						}}
					></Image>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={styles.fatigueSectionText}>Level</Text>
					<Text style={styles.fatigueSectionText}>
						Congrats, you're in the healthy range!
					</Text>
				</View>
			</View>
			<DashboardFavorites />
			{/* <View style={styles.floatingMenu}>
              <Image style={styles.button} source={bedwhite} />
              <TouchableOpacity onPress={() => onJournalPress()}>
				  <Image style={styles.button3} source={journal} />
              </TouchableOpacity> 
			  <Image style={styles.button} source={heartWhite} />
              <Image style={styles.button} source={activity} />
            </View> */}
			<DashboardMenu/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	textHeader: {
		fontSize: 30,
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	textSmall: {
		fontSize: 18,
	},
	mainContainer: {
		marginTop: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "left",
	},
	profileImg: {
		height: 110,
		width: 110,
		borderRadius: 60,
		marginRight: 20,
		borderColor: "white",
		borderWidth: 5,
	},
	userSection: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
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
	userSectionName: {
		fontSize: 20,
		fontWeight: "600",
	},
	fatigueSection: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		height: 200,
		shadowColor: "gray",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 20,
	},
	fatigueSectionData: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		textAlign: "center",
		marginBottom: 20,
		alignItems: "flex-end",
	},
	fatigueSectionText: {
		color: "#C5C5C5",
		fontSize: 12,
		fontWeight: "600",
	},
	favoritesHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},

	// //orginal functionalities of DashboardMenu
	// floatingMenu: {
	// 	width: "100%",
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	justifyContent: "space-around",
	// 	backgroundColor: "#2D14C4",
	// 	padding: 20,
	// 	borderRadius: 30,
	// 	color: "white",
	//   },
	//   button: {
	// 	width: 20,
	// 	height: 20,
	// 	opacity: 0.4,
	//   },
	//   button3: {
	// 	width: 20,
	// 	height: 20,
	// 	opacity: 1,
	//   },
});
