import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import journal from "./../Assets/Dashboard/journal_white.png";
import activity from "./../Assets/Dashboard/activity.png";
import Dashboard from '../Components/Dashboard/Dashboard';
import Journal from '../Components/Journal/Journal';

const tabs = createBottomTabNavigator()

const Tabs = () => {
    return (
        <tabs.Navigator
            tabBarOptions = {{
                showLabel: false,
                style:{
                    display: "flex",
                    position: 'absolute',
                    width: "100%",
                    height: 60,
                    elevation: 0,
                    backgroundColor: "#2D14C4",
                    padding: 20,
                    borderRadius: 30,
                }
            }}
        >
            <tabs.Screen name="Dashboard" component={Dashboard}
				options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            style={{
                                tintColor : focused ? '#ffffff':'#E7F1FF',
                                width: 20,
                                height: 20,
                                backgroundColor: "#2D14C4"
                            }} 
                            source={activity}
                        />
                    ),
                  }}
            />
            <tabs.Screen name="Journal" component={Journal} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            style={{
                                tintColor : focused ? '#ffffff':'#E7F1FF',
                                width: 20,
                                height: 20,
                                backgroundColor: "#2D14C4",
                            }} 
                            source={journal}
                        />
                    ),
                }}
            />
        </tabs.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
	NavMenu:{
		position: 'absolute',
		pressOpacity: 0.6,
		showLabel: false,
		style:{
			width: "100%",
			display: "flex",
			backgroundColor: "#2D14C4",
			padding: 20,
			borderRadius: 30,
		}
	},
	NavIcon: {
	  width: 20,
	  height: 20,
	  backgroundColor: "#2D14C4",
	},
  });