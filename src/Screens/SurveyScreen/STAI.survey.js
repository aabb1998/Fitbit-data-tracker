import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const STAI = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <View>
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text style={styles.title}>State-Trait Anxiety Inventory for Adults</Text>
                    <Text>  </Text>
                    <Text>  </Text>
                </View>

                <View>
                    <Text style={styles.form}>Self-evaluation form 1</Text>
                    <Text style={styles.description}>A number of statements which people have used to describe themselves to indicate how they feel at the momment. </Text>
                    <Text style={styles.description}>1 - Not at all</Text>
                    <Text style={styles.description}>2 - Somewhat</Text>
                    <Text style={styles.description}>3 - Moderately</Text>
                    <Text style={styles.description}>4 - Very Much</Text>
                </View>




                <View style={styles.top}>
                    <Text style={styles.question}>Question 1: I feel calm </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 2: I feel secure </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 3: I am tense </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 4: I feel strained </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 5: I feel at ease </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 6: I feel upset </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 7: I am presently worrying over possible misfortunes </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 8: I feel satisfied </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 9: I feel frightened </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 10: I feel comfortable </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 11: I feel self-confident</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 12: I feel nervous </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 13: I feel jitterry</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 14: I feel indecisive</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 15: I feel relaxed</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 16: I feel content</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 17: I feel worried</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 18: I feel confused</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 19: I feel steady</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 20: I feel pleasant</Text>
                </View>
                <View style={styles.bottom}>
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



                <View>
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text style={styles.form}>Self-evaluation form 2</Text>
                    <Text style={styles.description}>A number of statements which people have used to describe themselves to indicate how they generally feel. </Text>
                    <Text style={styles.description}>1 - Amost never</Text>
                    <Text style={styles.description}>2 - Sometimes</Text>
                    <Text style={styles.description}>3 - Often</Text>
                    <Text style={styles.description}>4 - Almost Always</Text>
                </View>

                <View style={styles.top}>
                    <Text style={styles.question}>Question 21: I feel pleasant</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 22: I feel nwevous and restless</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 23: I feel satisfied with myself</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 24: I wish I could be as happy as other seem to be </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 25: I feel like a failure</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 26: I feel rested</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 27: I am "calm, cool, and collected"</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 28: I feel that difficulties are pilling up and so that I cannot overcome them</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 29: I worry too much over something that really doesn't matter</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 30: I am happy </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 31: I have disturbing thoughts</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 32: I lack self-confidence</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 33: I feel secure</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 34: I make decisions easily </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 35: I feel inadequate</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 36: I feel content</Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 37: Some unimportant though run through my mind and bothers me </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 38: I take disappointment so keenly that I can't put them out of my mind </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 39: I am a steady person </Text>
                </View>
                <View style={styles.bottom}>
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
                    <Text style={styles.question}>Question 40: I get in a state of tension or turmoil as I think over my recent concerns and interests  </Text>
                </View>
                <View style={styles.bottom}>
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
            </View>
        </ScrollView>

    )
}

export default STAI

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
        fontSize: 20,
    },
    form: {
        fontSize: 30,
        textAlign: 'center',
    },

    scrollView: {
        backgroundColor: 'white',
    },
});