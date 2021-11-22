import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
        Foque no QR Code dentro da moldura{"\n"}para escanear</Text>
      <View style={styles.containerQr}>
        <QRCode
          value={qrValue ? qrValue : 'NA'}
          size={185}
          color="black"
          backgroundColor="white"
        />
      </View>
        <TouchableOpacity style={styles.btnVoltar}>
          <Image style={{width:60,height:60}} source={require('./assets/botaovoltar.png')} />
          <Text style={styles.btnCancelar} >Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerQr: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 45,
    borderColor: 'white'
  },

  text: {
    textAlign: 'center',
    fontSize:16,
    opacity:.70,
    marginBottom:18

  },
  textInput: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
  },
  btnVoltar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:60
  },

  btnCancelar: {
    justifyContent: 'center',
    opacity:.60,
    fontSize:17
  }

});