import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const PSS = () => {
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
                    <Text style={styles.scale}>Choose appropriate answer for each question </Text>
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
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.top}>
                    <Text style={styles.question}>Question 2: In the last month, how often have you felt that you were unable to control the
                        important things in your life? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 3: In the last month, how often have you felt nervous and stressed? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 4: In the last month, how often have you felt confident about your ability to handle
                        your personal problems? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 5: In the last month, how often have you felt that things were going your way?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 6: In the last month, how often have you found that you could not cope with
                        all the things that you had to do? </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 7: In the last month, how often have you been able to control irritations in
                        your life?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 8: In the last month, how often have you felt that you were on top of things?
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 9: In the last month, how often have you been angered because of things that
                        happened that were outside of your control?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.top}>
                    <Text style={styles.question}>Question 10: In the last month, how often have you felt difficulties were piling up so high that
                        you could not overcome them?</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.option}>4</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.bottom}>
                    <TouchableOpacity>
                        <Text style={styles.button}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>FINISH</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.score}>Your score: _____</Text>
                    <Text style={styles.description}>Scores ranging from 0-13 would be considered low stress.</Text>
                    <Text style={styles.description}>Scores ranging from 14-26 would be considered moderate stress</Text>
                    <Text style={styles.description}>Scores ranging from 27-40 would be considered high perceived stress.</Text>
                </View>

            </View>
        </ScrollView>
    )
}
export default PSS

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