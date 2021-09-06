import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Survey() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Rate the quality of your sleep
      </Text>
            <Text> option 1 </Text>
            <Text> option 2 </Text>
            <Text> option 3 </Text>
            <Text> option 4 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
