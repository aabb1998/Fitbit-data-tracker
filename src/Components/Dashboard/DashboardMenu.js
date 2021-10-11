import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import bed from "../../Assets/Dashboard/bed.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal_white.png";
import activity from "../../Assets/Dashboard/activity.png";

export default function DashboardMenu({ navigation }) {
  const onActivityPress = () => {
    navigation.navigate("Dashboard");
  };

  // const onJournalPress = () => {
  //   navigation.navigate("Journal");
  // };
  
  return (
    <View style={styles.floatingMenu}>
        <Image style={styles.button} source={bedwhite} />
        <TouchableOpacity onPress={() => onJournalPress()}>
          <Image style={styles.button3} source={journal} />
        </TouchableOpacity>
        <Image style={styles.button} source={heartWhite} />
        <TouchableOpacity onPress={() => onActivityPress()}>
          <Image style={styles.button} source={activity} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2D14C4",
    padding: 20,
    borderRadius: 30,
    color: "white",
  },
  button: {
    width: 20,
    height: 20,
    opacity: 0.4,
  },
  button3: {
    width: 20,
    height: 20,
    opacity: 1,
  },
});
