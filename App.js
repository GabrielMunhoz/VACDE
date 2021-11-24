import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import Home from './src/telas/Home';
import Cadastro_2parte from './src/telas/Cadastro-2parte';
import AtualizarCadastro from './src/telas/AtualizarCadastro';
import TelaQRCode from './src/telas/TelaQRCode';
import TelaDadosAprovados from './src/telas/TelaDadosAprovados';
import TelaDadosIncompletos from './src/telas/TelaDadosIncompletos';
import TelaDadosRecusados from './src/telas/TelaDadosRecusados';
import TelaQRCodeGerado from './src/telas/TelaQRCodeGerado';

const Stack = createNativeStackNavigator();

export default function routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown: false}} name="Cadastro-2parte" component={Cadastro_2parte} />
                <Stack.Screen options={{headerShown: false}} name="AtualizarCadastro" component={AtualizarCadastro} />
                <Stack.Screen options={{headerShown: false}} name="TelaQRCode" component={TelaQRCode} />
                <Stack.Screen options={{headerShown: false}} name="TelaDadosAprovados" component={TelaDadosAprovados} />
                <Stack.Screen options={{headerShown: false}} name="TelaDadosIncompletos" component={TelaDadosIncompletos} />
                <Stack.Screen options={{headerShown: false}} name="TelaDadosRecusados" component={TelaDadosRecusados} />
                <Stack.Screen options={{headerShown: false}} name="TelaQRCodeGerado" component={TelaQRCodeGerado} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}