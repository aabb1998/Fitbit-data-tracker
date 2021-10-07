import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Survey from './src/Screens/SurveyScreen/Survey';
import SurveyList from './src/Screens/SurveyScreen/Survey-list';


import { Card } from 'react-native-paper';
export default function App() {

  return (
    <ScrollView >

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Karolinska Sleepiness Scale
        </Text>
        <Text style={styles.subheading}>
          Rate your sleep from a scale of 1-10
        </Text>
        <Card style={styles.cardstyple}>
          <Survey />
        </Card>
        <Text style={styles.button}> Finish Survey </Text>
        <SurveyList />

      </View>
    </ScrollView>

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
    margin: 24,
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
  cardstyple: {
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
  button: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#68a0cf',
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 0,
    width: 200,




  }
});
