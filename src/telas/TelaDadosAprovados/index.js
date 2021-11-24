import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {styles} from './style';

export default function TelaDadosAprovados() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.usuario}>Usuário</Text>
      <Text style={styles.recebeNome}>(Nome do Usuário)</Text>          

      <Image style={{width:165,height:165}} source={require('../../../assets/img/aprovado.jpg')} />

      <Text style={styles.textAprovado}>Dados Recusados</Text>

      <TouchableOpacity style={styles.btnVoltar}>
        <Image style={{width:55,height:55}} source={require('../../../assets/img/botaovoltar.jpg')} />
        <Text style={{fontSize:20, textAlign: 'center', opacity: .70}}>Voltar</Text> 
      </TouchableOpacity>

    </View>
  );
}