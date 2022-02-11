import React from 'react';
import AccountPage from '../screens/AccountPage';
import CreateAccountPage from '../screens/CreateAccountPAge';
import HelpPage from '../screens/HelpPage';
import LoginPage from '../screens/LoginPage';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavigationStack() {
    const opt = {

        headerStyle: {
            backgroundColor: '#004A9F',
            elevation: 0
        },
        headerTintColor: "#fff",

    }
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Login" component={LoginPage} options={opt} />
                <Stack.Screen name="Home" component={Home} options={opt} />
                <Stack.Screen name="Account" component={AccountPage} options={opt} />
                <Stack.Screen name="Create Account" component={CreateAccountPage} options={opt} />
                <Stack.Screen name="Help" component={HelpPage} options={opt} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

