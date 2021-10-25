import React from 'react';
import { SectionList, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, Text, View } from 'react-native';
import backButton from "../../Assets/Dashboard/backArrow.png";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ListItem, Avatar } from 'react-native-elements'
import Constants from 'expo-constants';

const list = [
  {
    id: 1,
    name: 'Karolinska Sleepiness Scale',
    avatar_url: 'https://static.thenounproject.com/png/29662-200.png',
    page: 'KSS',
    subtitle: 'Assesses your sleep quality',
    dataHistory: 'View Sleep Quality History',
    graph: 'KSSGraph'
  },
  {
    id:2,
    name: 'Stress Assessment',
    avatar_url: 'https://icon-library.com/images/stress-icon/stress-icon-4.jpg',
    page: 'VAS',
    subtitle: 'Visual Analog Scale to determine your stress levels',
    dataHistory: 'View Stress Level History',
    graph: 'VASGraph'
  },

]



export default function SurveyList() {
keyExtractor = (item, index) => index.toString()
const navigation = useNavigation();
//const SectionListBasics = () => {
    renderItem = ({ item }) => (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )

      return (
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
                              					onPress={() => navigation.navigate("Dashboard")}
                              				>
                              					<Image style={styles.imagestyle} source={backButton} />
                              				</TouchableOpacity>
      <Text style={styles.paragraph2}>
      Daily Surveys
      </Text>
        <View>
        <FlatList
           keyExtractor ={ (item, index) => index.toString()}
          data={list}
          renderItem={({ item }) => (
                            <ListItem bottomDivider>
                              <Avatar source={item.avatar_url && { uri: item.avatar_url } }/>
                              <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                                <TouchableOpacity onPress={() => navigation.navigate(item.graph)}>
                                <ListItem.Subtitle style={styles.subtitle}>{item.dataHistory}</ListItem.Subtitle>
                                </TouchableOpacity>

                              </ListItem.Content>
                              <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
                              <ListItem.Chevron/>
                              </TouchableOpacity>
                            </ListItem>
                          )}
        />
        </View>
        </SafeAreaView>
      )


}

const styles = StyleSheet.create({
     container: {
         flex: 1,
         //justifyContent: 'center',
         paddingTop: Constants.statusBarHeight,
         // backgroundColor: 'rgba(255, 255, 255, 0.8)',
         padding: 8,
   },
     paragraph2: {
         margin: 24,
         fontSize: 25,
         fontWeight: 'bold',
         textAlign: 'center',
   },
   imagestyle: {
   position: "relative",
   width: 20,
   height: 20,
   marginLeft: 10,
   marginTop: 10,
   },
     subtitle: {
         fontWeight: 'bold',
   }
})


