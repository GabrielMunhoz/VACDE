import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import api from '../../Services/api';

export default function App({navigation}) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmesenha, setConfirmesenha] = useState('');
  const [confirmado, setConfirmado] = useState(0);

  const cadastro = async() => {
    await api.post("/usuario/cadastrar", {nome: nome, senha: confirmesenha});
  }

  useEffect(()=>{
    if(senha === confirmesenha){
          setConfirmado(1);
      }else{
          setConfirmado(2);
      }
  }, [confirmesenha]);

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
      <TextInput secureTextEntry={true} placeholder="Confirme sua senha..." style={styles.textInput} onChangeText={text=>setConfirmesenha(text)} />
      {confirmado === 2 && <Text style={[styles.textCadastro, {fontSize: 13, color: "red", marginLeft: 15, marginTop: -30}]}>As senhas estão diferentes</Text> }
      {confirmado === 1 && <TouchableOpacity style={styles.btnCadastro} onPress={cadastro}>
        <Text style={{color:'white',textAlign:'center', fontSize:'25px'}}>Cadastrar</Text>
      </TouchableOpacity>}
    </View>
  );
}


