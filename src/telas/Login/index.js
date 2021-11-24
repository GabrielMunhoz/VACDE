import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './style';
import api from '../../Services/api';

export default function App({navigation}) {

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [logado, setLogado] = React.useState(0);

  const Login = async () =>{

    try{
      const response = await api.post("/usuario/login", {nome: email, senha});
      setLogado(1);
      navigation.navigate("Home");
      console.log(response)
    }catch(error){
      setLogado(2);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.whiteSpace} >
        <Image style={styles.logo} source={require('../../../assets/img/vaCde-icon.jpeg')} />
        <Text style={styles.title} >VaCde</Text>
      </View>
      <View style={styles.mainContent} >
        <Text style={styles.label} >CPF/Email</Text>
        <TextInput onChangeText={text=>setEmail(text)} multiline={true} style={styles.input} />
        <Text style={styles.label} >Senha</Text>
        <TextInput onChangeText={text=>setSenha(text)} style={styles.input} />
        {logado === 2 &&<Text style={[styles.label, {color: "red", marginTop: 10}]} >Email ou Senha incorretos.</Text>}
        <TouchableOpacity style={styles.btnEntry} onPress={Login} >
          <Text style={styles.btnEntryText} >Entrar</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.btnEntry} onPress={()=>navigation.navigate("Home")} >
          <Text style={styles.btnEntryText} >Entrar</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.whiteSpace} >
        <TouchableOpacity style={styles.btnNew} onPress={()=> navigation.navigate("Cadastro") } >
          <Text style={styles.btnNewText} >Sou Novo Por Aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNew} onPress={()=> navigation.navigate("TelaQRCode") } >
          <Text style={styles.btnNewText} >Ler QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

