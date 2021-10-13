import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Survey from './src/Screens/SurveyScreen/Survey';
import SurveyList from './src/Screens/SurveyScreen/Survey-list';
import Vas from './src/Screens/SurveyScreen/Vas';

export default function App() {

  return (
      <ScrollView>
      <View>
        <Survey/>
        <SurveyList/>
        <Vas/>
      </View>
      </ScrollView>

  );
}
