import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../Screens/MainScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import JobsAroundScreen from '../Screens/JobsAroundScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'


const AppNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Main Screen"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffffff' },
                tabBarActiveBackgroundColor: '#E7E7E7'
            }}>
                <Tab.Screen
                    name="Main Screen"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'New',
                        tabBarIcon: ({ color, size }) => (
                        <Icon name="fiber-new" size={30} style={{color: '#000000'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="person-pin" size={30} style={{color: '#000000'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Jobs Screen"
                    component={JobsAroundScreen}
                    options={{
                        tabBarLabel: 'WC Around You',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('../assets/logo.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        ),
                }}/>
        </Tab.Navigator>
    )
}

export default AppNav