import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nomecompleto, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmesenha, setConfsenha] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity style={{marginRight:'80%'}}>
        <Image style={{width:50, height:50}} source={require('./assets/voltar.jpg')} />
      </TouchableOpacity>
      <Image style={{width:160,height:160,marginTop:-25}} source={require('./assets/vacina.jpg')} />

      <Text style={styles.textCadastro}>Cadastre-se</Text>

      <TextInput placeholder="Nome Completo..." style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="Seu e-mail..." style={styles.textInput} onChangeText={text=>setEmail(text)} />   
      <TextInput secureTextEntry={true} placeholder="Sua senha..." style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <TextInput secureTextEntry={true} placeholder="Confirme sua senha..." style={styles.textInput} onChangeText={text=>setConfsenha(text)} />

      <TouchableOpacity style={styles.btnCadastro}>
        <Text style={{color:'white',textAlign:'center', fontSize:'25px'}}>Continuar</Text>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width: '85%',
    height:50,
    backgroundColor:'white',
    borderRadius:100,
    paddingLeft:10,
    marginTop:-10,
    marginBottom:25  
  },
  btnCadastro:{
    width:'65%',
    height:70,
    backgroundColor: '#5DB7E3',
    borderRadius:100,
    justifyContent:'center'
    
  },

  textCadastro:{
    paddingTop:15,
    paddingLeft:12,
    marginBottom:30,
    fontSize:25,
    color: '#808080',
    marginRight:'50%'

  }


});
