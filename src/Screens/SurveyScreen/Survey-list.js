import React from 'react';
import { SectionList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    marginLeft:20,
    paddingBottom: 2,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 2,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#68a0cf',
    borderWidth: 1,
    height: 100,
    fontWeight: 'bold',
    fontSize: 20,



  },
})

const SurveyList = () => {
  return (
    <View style={styles.container}>

      <SectionList
        sections={[
          {
            title: 'Daily Survey',
            data: ['Karolinska Sleepiness Scale', 'Visual Analog Scale (VAS)']
          },

        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}

      />

    </View>
  );
}

export default SurveyList;