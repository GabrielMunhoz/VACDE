import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// import QRCodeScanner from 'react-native-qrcode-scanner';
import {styles} from './style';

export default function TelaQRCode({navigation}) {
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
        {/* <QRCodeScanner
            // onRead={this.onSuccess}
        /> */}
      </View>
        <TouchableOpacity style={styles.btnVoltar} onPress={()=> navigation.navigate("Login")}>
          <Image style={{width:60,height:60}} source={require('../../../assets/img/botaovoltar.jpg')} />
          <Text style={styles.btnCancelar} >Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}