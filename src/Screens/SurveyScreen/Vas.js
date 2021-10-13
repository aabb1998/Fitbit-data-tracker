import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Slider from "../../Components/Slider";


export default function Vas() {
return (
      <View style={styles.container}>
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
        <Button title="Finish Survey" />
      </View>
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