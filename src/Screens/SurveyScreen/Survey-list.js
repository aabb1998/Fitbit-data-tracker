import React from 'react';
import { SectionList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
            {title: 'Daily Survey',

            data: ['Karolinska Sleepiness Scale', 'Visual Analog Scale (VAS)']},

          ]}
          renderItem={({item}) => <TouchableOpacity> <Text style={styles.item}>{item}</Text>  </TouchableOpacity>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}

        />

      </View>
    );
}

export default SurveyList;