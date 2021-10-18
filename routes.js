import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import Home from './src/telas/Home';

const Stack = createNativeStackNavigator();

export default function routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}