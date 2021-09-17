import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { HomeScreen } from "./Index";
import { LoginScreen } from "./Index";
import { RegistrationScreen } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import Journal from "./src/Components/Journal/Journal";
import Biological from "./src/Components/Biological/Biological";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="Biological" component={Biological} /> */}
        { <Stack.Screen name="Journal" component={Journal} /> }
        
              </Stack.Navigator>
    </NavigationContainer>
  );
}
