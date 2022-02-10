import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AccountPage from '../screens/AccountPage';
import CreateAccountPage from '../screens/CreateAccountPAge';
import HelpPage from '../screens/HelpPage';
import LoginPage from '../screens/LoginPage';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens();
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Account" component={AccountPage} />
                <Stack.Screen name="Create Account" component={CreateAccountPage} />
                <Stack.Screen name="Help" component={HelpPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

