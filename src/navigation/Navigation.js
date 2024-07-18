// src/navigation/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInUser from '../screens/SignInUser';
import SignUpUser from '../screens/SignUpUser';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn"
                    component={SignInUser}
                    options={{ title: 'Iniciar Sesión' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpUser}
                    options={{ title: 'Registro' }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Inicio' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
