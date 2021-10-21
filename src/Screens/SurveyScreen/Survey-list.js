import React from 'react';
import { SectionList, StyleSheet, SafeAreaView, Image, TouchableOpacity, Text, View } from 'react-native';
import backButton from "../../Assets/Dashboard/backArrow.png";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  imagestyle: {
    		position: "relative",
    		width: 20,
    		height: 20,
    		marginLeft: 10,
    		marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export default function SurveyList() {
const navigation = useNavigation();
//const SectionListBasics = () => {
    return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity
                  					onPress={() => navigation.navigate("Dashboard")}
                  				>
                  					<Image style={styles.imagestyle} source={backButton} />
                  				</TouchableOpacity>
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Daily Surveys', data: ['Karolinska Sleepiness Scale',
            'Stress Assessment Visual Analog Scale']},
            {title: 'Weekly Surveys', data: [ ]},
          ]}
          renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("KSS")}><Text style={styles.item}>{item}</Text></TouchableOpacity>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
    );

}


