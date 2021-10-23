import * as React from 'react';
import {SafeAreaView, View, Text, ScrollView, Dimensions, TouchableOpacity, Image, StyleSheet, StatusBar} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {LineChart} from 'react-native-chart-kit';
import { Component } from 'react';
import backButton from "../../Assets/Dashboard/backArrow.png";

const labels = [
  '1/10',
  '2/10',
  '3/10',
  '4/10',
  '5/10',
  '6/10',
  '7/10',
  '8/10',
  '9/10',
  '10/10',
  '11/10',
  '12/10',
  '13/10',
  '14/10',
  '15/10',
  '15/10',
  '16/10',
  '17/10',
  '18/10',
  '19/10',
  '20/10',
  '21/10',
  '22/10',
  '23/10',
  '24/10',
  '25/10',
  '26/10',
  '27/10',
  '28/10',
  '29/10',
  '30/10',
  '31/10',

];

const data = [
  '3',
  '3',
  '3',
  '5',
  '2',
  '2',
  '5',
  '4',
  '4',
  '5',
  '3',
  '3',
  '3',
  '3',
  '5',
  '5',
  '5',
  '2',
  '5',
  '4',
  '4',
  '5',
  '2',
  '2',
  '2',
  '5',
  '4',
  '4',
  '5',
  '2',
  '2',
  '2',
];

const App: () => React$Node = () => {
const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <TouchableOpacity
               onPress={() => navigation.navigate("SurveyList")}>
               <Image style={styles.imagestyle} source={backButton} />
               </TouchableOpacity>
        <View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>Stress Level History</Text>
          </View>
          <View style={{alignItems: 'center'}}>
          <ScrollView horizontal={true}>
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: data,
                  },
                ],
              }}
              width={1200} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#D9D9D9',
                backgroundGradientTo: '#FFF',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 5,
                borderRadius: 15,
              }}
            />
          </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
imagestyle: {
        		position: "relative",
        		width: 20,
        		height: 20,
        		marginLeft: 10,
        		marginTop: 10,
    }
});