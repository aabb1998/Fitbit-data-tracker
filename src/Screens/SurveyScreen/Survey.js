import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const Survey = () => {
    return (
        <View>
            <View>
                <Text style = {styles.title}>Survey Title: __________________</Text>
            </View>
            <View style = {styles.top}>
                <Text style = {styles.question}>Question 1: What is your favorite time .... ? </Text>
            </View>
            <View style = {styles.options}>
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 1:</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 2:</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 3:</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 4:</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 5:</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.optionButton}>
                <Text style = {styles.option}>Option 6:</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles. bottom}>
                <TouchableOpacity>
                    <Text style = {styles.button}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.button}>NEXT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Survey

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',

    },
        top: {
            marginVertical: 16,
        },
        options:{
            marginVertical: 16,
            flex: 1,
        },
        bottom:{
            marginVertical:12,
            paddingVertical:16,
            justifyContent:'space-between',
            flexDirection: 'row',
        },
        button:{
            width: '100%',
            backgroundColor: '#1A759E',
            padding: 20,
            borderRadius: 25,
            alignItems: 'center',
            marginBottom: 30,
            fontSize: 25,
        },
        question: {
            fontSize: 25,
        },
        option:{
            fontSize: 18,
            fontWeight: '500',
            color: 'white',
            
        },
        optionButton:{
            paddingVertical:12,
            marginVertical:6,
            backgroundColor: '#34A0A4',
            paddingHorizontal: 12,
            borderRadius: 12,
        },
        title:{
            fontSize: 35,
            fontWeight: '700',
            color:'white',
            paddingHorizontal: 100,
        },

  });