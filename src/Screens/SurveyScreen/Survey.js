import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Image, Button} from 'react-native';
import { Component } from 'react';
import RadioButton from "../../Components/RadioButton";
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import backButton from "../../Assets/Dashboard/backArrow.png";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const PROP = [
  {
    key: '1',
    text: '1 - Extremely Alert',
  },
  {
    key: '2',
    text: '2 - Very Alert',
  },
  {
    key: '3',
    text: '3 - Alert',
  },
  {
    key: '4',
    text: '4 - Rather Alert',
  },
  {
    key: '5',
    text: '5 - Neither Alert Nor Sleepy ',
  },
  {
    key: '6',
    text: '6 - Some Signs of Sleepiness',
  },
  {
    key: '7',
    text: '7 - Sleepy but No Effort to Keep Awake',
  },
  {
    key: '8',
    text: '8 - Sleepy but Some Effort to Keep Awake',
  },
  {
    key: '9',
    text: '9 - Very Sleepy, Great Effort to Keep Awake, Fighting Sleep',
  },
  {
    key: '10',
    text: '10 - Extremely Sleepy, Cant Keep Awake',
  },
];

export default function Survey()  {
const navigation = useNavigation();
  //render() {
    return (

      <SafeAreaView style={styles.container2}>
      <ScrollView>
      <TouchableOpacity
         onPress={() => navigation.navigate("Dashboard")}>
         <Image style={styles.imagestyle} source={backButton} />
         </TouchableOpacity>

              <Text style={styles.paragraph2}>
                Karolinska Sleepiness Scale
              </Text>
              <Text style={styles.subheading}>
                Rate your sleep from a scale of 1-10
              </Text>
      <Card style={styles.card}>

        <RadioButton PROP={PROP} />
      </Card>
      <Button title="Finish Survey" onPress={() =>{alert('Thank you for completing survey.'); navigation.navigate("SurveyList")}}/>
      </ScrollView>
      </SafeAreaView>


    );
  }
//}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  container2: {
      flex: 1,
      justifyContent: 'center',
      // paddingTop: Constants.statusBarHeight,
      // backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 8,
   },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
      margin: 24,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
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
    imagestyle: {
        		position: "relative",
        		width: 20,
        		height: 20,
        		marginLeft: 10,
        		marginTop: 10,
    },
  subheading: {
      margin: 5,
      fontSize: 20,
      fontWeight: "500",
      textAlign: 'center',
      //fontFamily: "sans-serif",
    },
  logo: {
    height: 128,
    width: 128,
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});