import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Component } from 'react';
import RadioButton from "../../Components/RadioButton";

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

export default class Survey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioButton PROP={PROP} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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