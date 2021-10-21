import React, {Component , useEffect} from 'react';
import { LineChart} from "react-native-chart-kit";
import * as functions from "../../firebase/config";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Alert, Button} from 'react-native';
import { render } from 'react-dom';


const labels1 = [
  '21/10',
  '22/10',
  '23/10',
  '24/10',
  '25/10',
  '26/10',
  ];
  const data1 = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  ];
  
const labels2 = [
  ];
  const data2 = [
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  Math.random() * 1000,
  ];


  export default class PVTDetails extends Component {

  DisplayRes()
  {
    var res = functions.getAllResults();
    //How do I actually use the data?
  }
render(){
    return (
      <View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, marginTop: 70}}>Daily Scores</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <LineChart
              data={{
                labels: labels1,
                datasets: [
                  {
                    data: data1,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#D9D9D9',
                backgroundGradientTo: '#FFF',
                decimalPlaces: 2, // optional, defaults to 2dp
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
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, marginTop: 70}}>Test Breakdown</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <LineChart
              data={{
                labels: labels2,
                datasets: [
                  {
                    data: data2,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#D9D9D9',
                backgroundGradientTo: '#FFF',
                decimalPlaces: 2, // optional, defaults to 2dp
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
          </View>
          <Button title="End Test" onPress={() => this.DisplayRes()}/>
        </View>
)}
}