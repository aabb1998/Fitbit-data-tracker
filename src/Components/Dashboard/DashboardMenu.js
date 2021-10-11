import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import bed from "../../Assets/Dashboard/bed.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal_white.png";
import activity from "../../Assets/Dashboard/activity.png";

export default function DashboardMenu({ navigation }) {
  const onActivityPress = () => {
    navigation.navigate("Dashboard");
  };

  const onJournalPress = () => {
    navigation.navigate("Journal");
  };
  
  return (
    <View style={styles.NavMenu}>
        <Image 
          style={styles.NavButtonOff} 
          source={bedwhite} 
        />
        <Pressable 
          onPress={() => onJournalPress()}>
          <Image 
            style={styles.NavButtonOn} 
            source={journal} 
          />
        </Pressable>
        <Image 
          style={styles.NavButtonOff} 
          source={heartWhite} 
        />
        <Pressable 
          onPress={() => onActivityPress()}>
          <Image 
            style={styles.NavButtonOff} 
            source={activity} 
          />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  NavMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2D14C4",
    padding: 20,
    borderRadius: 30,
    color: "white",
  },
  NavButtonOff: {
    width: 20,
    height: 20,
    opacity: 0.4,
  },
  NavButtonOn: {
    width: 20,
    height: 20,
    opacity: 1,
  },
});
