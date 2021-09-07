import React from "react";
import {
    Image, 
    View, 
    StyleSheet, 
    Text, 
    SafeAreaView } from "react-native";
import DashboardMenu from "../Dashboard/DashboardMenu";

const Journal = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#F2F6F9", padding: 20 }}>
            <View style={styles.mainContainer}>
                <Text style={styles.textHeader}>Summary</Text>
                <Text style={styles.textSmall}>                        
                    How is your work out
                </Text>
            </View>
            <DashboardMenu />
        </SafeAreaView>  
    );
};

export default Journal;

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
		justifyContent: "left",
		alignContent: "flex-end",
		textAlign: "left",
	},

    statisticsLogo: {
        height: 19,
        wight: 14,
        marginBottom:6,
    }
});