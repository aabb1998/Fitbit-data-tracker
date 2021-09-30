import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Survey from './android/app/src/Screens/SurveyScreen/Survey';
import SurveyList from './android/app/src/Screens/SurveyScreen/Survey-list';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Karolinska Sleepiness Scale
      </Text>
      <Text style={styles.subheading}>
              Rate your sleep from a scale of 1-10
            </Text>
      <Card style={styles.card}>
        <Survey/>


      </Card>

        <Text> <TouchableOpacity style={styles.button}> Finish Survey </TouchableOpacity> </Text>

      <SurveyList/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
      fontFamily: "sans-serif",
  },
  card: {
  margin: 5,

  borderWidth: 0,
  backgroundImage: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
  width: 600,
  boxShadow: '10px 10px 5px grey',
  marginLeft: 'auto',
  marginRight: 'auto',



  },
  button: {
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  borderColour: '#2196F3',
  backgroundColor: '#68a0cf',
  borderRadius: 5,
   marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
    borderWidth: 0,
    width: 200,
    boxShadow: '5px 5px 2px grey',




  }
});
