import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.usuario}>Usuário</Text>
      <Text style={styles.recebeNome}>(Nome do Usuário)</Text>          

      <Image style={{width:165,height:165}} source={require('./assets/recusado.jpg')} />

      <Text style={styles.textAprovado}>Dados Recusados</Text>

      <TouchableOpacity style={styles.btnVoltar}>
        <Image style={{width:55,height:55}} source={require('./assets/botaovoltar.jpg')} />
        <Text style={{fontSize:20, textAlign: 'center', opacity: .70}}>Voltar</Text> 
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E83131',
    alignItems: 'center',
    justifyContent: 'center',
  },

  usuario:{
    fontWeight: "bold",
    fontSize: 20,
    opacity: .50,
    marginBottom:6
  },

  recebeNome:{
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    opacity: .60
  },

  textAprovado:{
    fontWeight: "bold",
    fontSize: 30,
    marginTop:6
  },

  btnVoltar:{
    marginTop: 130
  }

});
