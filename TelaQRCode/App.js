import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textqrcode}>Foque no QR Code dentro da moldura{"\n"}para escanear</Text>
      <StatusBar style="auto" />

      <View style={{width:265, height:265, backgroundColor: '#F2F2F2'}} />

      <TouchableOpacity style={styles.btnVoltar}>
          <Image style={{width:60,height:60}} source={require('./assets/botaovoltar.png')} />
      </TouchableOpacity>

      <Text style={styles.btnCancelar} >Cancelar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textqrcode: {
    textAlign: 'center',
    fontSize:16,
    opacity:.70,
    marginBottom:15
  },

  btnVoltar: {
    marginTop:70
  },

  btnCancelar: {
    opacity:.60,
    fontSize:17
  }

});
