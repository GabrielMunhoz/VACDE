import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App({navigation}) {

  const [nomecompleto, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmesenha, setConfsenha] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity style={{marginRight:'80%', backgroundColor:"#E7EAEA"}} onPress={()=> navigation.navigate("Login")}>
        <Image style={{width:50, height:50}} source={require('../../../assets/img/voltar.jpg')} />
      </TouchableOpacity>
      <Image style={{width:160,height:160,marginTop:-25}} source={require('../../../assets/img/vacina.jpg')} />

      <Text style={styles.textCadastro}>Cadastre-se</Text>

      <TextInput placeholder="Nome Completo..." style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="Seu e-mail..." style={styles.textInput} onChangeText={text=>setEmail(text)} />   
      <TextInput secureTextEntry={true} placeholder="Sua senha..." style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <TextInput secureTextEntry={true} placeholder="Confirme sua senha..." style={styles.textInput} onChangeText={text=>setConfsenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={()=> navigation.navigate("Cadastro-2parte")}>
        <Text style={{color:'white',textAlign:'center', fontSize:'25px'}}>Continuar</Text>
      </TouchableOpacity>



    </View>
  );
}


