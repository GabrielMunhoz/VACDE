import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './style';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.whiteSpace} >
        <Image style={styles.logo} source={require('../../../assets/img/vaCde-icon.jpeg')} />
        <Text style={styles.title} >VaCde</Text>
      </View>
      <View style={styles.mainContent} >
        <Text style={styles.label} >CPF/Email</Text>
        <TextInput multiline={true} style={styles.input} />
        <Text style={styles.label} >Senha</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.btnEntry} onPress={()=> navigation.navigate("Home") } >
          <Text style={styles.btnEntryText} >Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.whiteSpace} >
        <TouchableOpacity style={styles.btnNew} onPress={()=> navigation.navigate("Cadastro") } >
          <Text style={styles.btnNewText} >Sou Novo Por Aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

