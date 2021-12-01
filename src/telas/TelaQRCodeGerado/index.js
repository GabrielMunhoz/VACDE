import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../TelaQRCodeGerado/style';
import QRCode from "react-qr-code";

function TelaQRCodeGerado({text, navigation}) {

  return (
      <View style={styles.container} >
           <Text style={styles.comando} >Foque no QR code dentro da moldura para escanear</Text>
           <View style={styles.canvas} >
                <QRCode value="hey" size={130} />
           </View>
<<<<<<< HEAD
           <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.cancelar} ><Image style={styles.close} source={require('../../../assets/img/close.jpeg')} /></TouchableOpacity>
=======
           <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.cancelar} ><Image style={styles.close} source={require('../../../assets/img/close.jpg')} /></TouchableOpacity>
>>>>>>> c8e7baf9fb19abe5e21b13ba88d14cafc95357a0
           <Text style={styles.cancelarText} >Cancelar</Text>
      </View>
  );
}

export default TelaQRCodeGerado;