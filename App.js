import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import {styles} from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.whiteSpace} >
        <Image style={styles.logo} source={require('./assets/img/vaCde-icon.jpeg')} />
      </View>
      <View style={styles.mainContent} >
        <Text style={styles.label} >CPF/Email</Text>
        <TextInput multiline={true} style={styles.input} />
        <Text style={styles.label} >Senha</Text>
        <TextInput style={styles.input} />
        <Pressable style={styles.btnEntry} >
          <Text style={styles.btnEntryText} >Entrar</Text>
        </Pressable>
      </View>
      <View style={styles.whiteSpace} >
        <Pressable style={styles.btnNew} >
          <Text style={styles.btnNewText} >Sou Novo Por Aqui</Text>
        </Pressable>
      </View>
    </View>
  );
}

