import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Slider from "../../Components/Slider";
import backButton from "../../Assets/Dashboard/backArrow.png";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function Vas() {
const navigation = useNavigation();
return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity
                    					onPress={() => navigation.navigate("Dashboard")}
                    				>
                    					<Image style={styles.imagestyle} source={backButton} />
                    				</TouchableOpacity>
        <Card style={styles.card}>

        <Text style={styles.paragraph}>
                  Stress Assessment
                </Text>
                <Text style={styles.subheading}>
                  Select your stress level that best resembles you from the visual scale
                </Text>
                <Image style={styles.logo} source={require('../../Assets/Survey/satisfaction-scale.png')} />
                <Slider/>
        </Card>
      </View>
      </ScrollView>
      <Button title="Finish Survey" onPress={() =>{alert('Thank you for completing survey.'); navigation.navigate("SurveyList")}} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheading: {
    margin: 5,
    fontSize: 20,
    fontWeight: "500",
    textAlign: 'center',
    //fontFamily: "sans-serif",
  },
  imagestyle: {
  		position: "relative",
  		width: 20,
  		height: 20,
  		marginLeft: 10,
  		marginTop: 10,
  },
  card: {
    alignContent: "center",
    margin: 5,
    borderWidth: 5,
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logo: {
      height: 100,
      width: 300,
  }
});