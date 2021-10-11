import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import bed from "../../Assets/Dashboard/bed.png";
import bedwhite from "../../Assets/Dashboard/bed-white.png";
import heartWhite from "../../Assets/Dashboard/heart-rate-white.png";
import journal from "../../Assets/Dashboard/journal_white.png";
import activity from "../../Assets/Dashboard/activity.png";
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Journal from "../../Components/Journal/Journal";
import Dashboard from "././././Dashboard";

const Tabs = createMaterialTopTabNavigator()

const MyFooter = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Dashboard" component={Dashboard} 
          style={styles.NavButtonOn} source={activity} />
        <Tabs.Screen name="Journal" component={Journal} 
          style={styles.NavButtonOn} source={journal} />
    </Tabs.Navigator>
)
const stackConfig = {
  headerMode: 'none',
}

const Stack = createStackNavigator()
  
const DashboardMenu = () => {
  // const onActivityPress = () => {
  //   navigation.navigate("Dashboard");
  // };

  // const onJournalPress = () => {
  //   navigation.navigate("Journal");
  // };
  return (
      <NavigationContainer style={styles.NavMenu}>
        <Stack.Navigator {...stackConfig}>
          <Stack.Screen name="Tabs" component={MyFooter} />
        </Stack.Navigator>
      </NavigationContainer>

    //   <View style={styles.NavMenu}>
    //     <Image 
    //       style={styles.NavButtonOff} 
    //       source={bedwhite} 
    //     />
    //     <Pressable 
    //       onPress={() => onJournalPress()}>
    //       <Image 
    //         style={styles.NavButtonOn} 
    //         source={journal} 
    //       />
    //     </Pressable>
    //     <Image 
    //       style={styles.NavButtonOff} 
    //       source={heartWhite} 
    //     />
    //     <Pressable 
    //       onPress={() => onActivityPress()}>
    //       <Image 
    //         style={styles.NavButtonOff} 
    //         source={activity} 
    //       />
    //     </Pressable>
    // </View>
  );
}

export default DashboardMenu;

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
