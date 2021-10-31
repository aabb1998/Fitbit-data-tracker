import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {firebase} from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';


export default function PSS ({navigation}){
const _onPressFinish = () => {
    if(score<=13){
        alert('Scores ranging from 0-13 would be considered low stress.\nYour score is:'+score)
    }else if(13<score<=26){
        alert('Scores ranging from 14-26 would be considered moderate stress.\nYour score is:'+score)
    }else{
        alert('Scores ranging from 27-40 would be considered high perceived stress.\nYour score is:'+score)
    }
    var date = new Date().toLocaleString()
    const user = firebase.auth().currentUser;
    var Uemail = user.email;
    firebase
    .firestore()
    .collection('weeklySurvey')
    .add({
        score: score,
        surveyDate: date,
        surveyType: 'PSS',
        email: Uemail,
    })
    navigation.navigate("Graph");
}
const _onPressSkip = () => {
    navigation.navigate("Graph");
}
var score = 0;
const answer0 = ()=> {
    score += 4;
    return score;
} 
const answer1 = ()=>{
    score += 3;
    return score;
}
const answer2 = ()=>{
    score += 2;
    return score;
}
const answer3 = ()=>{
    score += 1;
    return score;
}
const answer4 = ()=>{
    score += 0;
    return score;
}
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <View>
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text style={styles.title}>Perceived Stress Scale</Text>
                    <Text>  </Text>
                    <Text>  </Text>
                </View>

                <View>
                    <Text style={styles.scale}>PSS scores are obtained by reversing responses</Text>
                    <Text style={styles.scale}>(0 = 4, 1 = 3, 2 = 2, 3 = 1, 4 = 0)</Text>
                    <Text style={styles.scale}>0 - never</Text>
                    <Text style={styles.scale}>1 - almost never</Text>
                    <Text style={styles.scale}>2 - sometimes</Text>
                    <Text style={styles.scale}>3 - fairly often</Text>
                    <Text style={styles.scale}>4 - very often</Text>
                    <Text></Text>
                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 1: In the last month, how often have you been upset because of something that
                        happened unexpectedly? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.top}>
                    <Text style={styles.question}>Question 2: In the last month, how often have you felt that you were unable to control the
                        important things in your life? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 3: In the last month, how often have you felt nervous and stressed? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 4: In the last month, how often have you felt confident about your ability to handle
                        your personal problems? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 5: In the last month, how often have you felt that things were going your way?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 6: In the last month, how often have you found that you could not cope with
                        all the things that you had to do? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 7: In the last month, how often have you been able to control irritations in
                        your life?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 8: In the last month, how often have you felt that you were on top of things?
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 9: In the last month, how often have you been angered because of things that
                        happened that were outside of your control?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 10: In the last month, how often have you felt difficulties were piling up so high that
                        you could not overcome them?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={answer0} style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer1} style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer2} style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer3} style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={answer4} style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.bottom}>
                    <TouchableOpacity onPress={()=>_onPressSkip()}>
                        <Text style={styles.button}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={()=>_onPressFinish()}>
                        <Text style={styles.button}>FINISH</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',

    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginVertical: 12,
        paddingVertical: 16,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759E',
        padding: 20,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 30,
        fontSize: 25,
        fontWeight: '500',
    },
    question: {
        fontSize: 25,
    },
    scale: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black',

    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',

    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#8BA79A',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
        paddingHorizontal: 100,
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#90E39A',
        paddingHorizontal: 12,
        borderRadius: 12,
        textAlign: 'center',
    },
    score: {
        fontSize: 28,
    },
    description: {
        fontSize: 15,
    },
    scrollView: {
        backgroundColor: 'white',
    },

});