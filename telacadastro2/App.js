import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [cpf, setData] = useState('');
  const [email, setCpf] = useState('');
  const [senha, setLab] = useState('');
  const [confirmesenha, setDatadose] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity style={{marginRight:'80%'}}>
        <Image style={{width:50, height:50}} source={require('./assets/voltar.jpg')} />
      </TouchableOpacity>

      <Text style={styles.textConectsus}>Para continuar, entre no seu ConecteSUS</Text>
      <nav>
        <Text style={styles.textBaixar}>Faça o upload de sua{"\n"}Carteira de Vacinação Digital</Text>        
        <TouchableOpacity style={styles.btnBaixar}>
          <Image style={{width:50,height:50}} source={require('./assets/botaobaixar.jpg')} />
        </TouchableOpacity>
      </nav>

      <TextInput placeholder="Data de Nascimento" style={styles.textInput} onChangeText={text=>setData(text)} />
      <TextInput placeholder="CPF" keyboardType="numeric" style={styles.textInput} onChangeText={val=>setCpf(val)} />   
      <TextInput placeholder="Laboratório" style={styles.textInput} onChangeText={text=>setLab(text)} />
      <TextInput placeholder="Data da 1ª Dose" style={styles.textInput} onChangeText={val=>setDatadose(val)} />
      
      <TouchableOpacity style={styles.btnCadastrar}>
        <Text style={{color:'white',textAlign:'center', fontSize:'25px'}}>Cadastrar</Text>
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
    width:'90%',
    height:50,
    borderWidth: 2,
    borderColor:'gray',
    backgroundColor:'white',
    borderRadius:100,
    paddingLeft:10,
    marginTop:-15,
    marginBottom:30  
  },

  btnCadastrar:{
    width:'65%',
    height:70,
    backgroundColor: '#5DB7E3',
    borderRadius:100,
    justifyContent:'center'
    
  },

  textConectsus:{
    fontWeight: "solid",
    paddingTop:15,
    paddingLeft:12,
    marginBottom:40,
    fontSize:25,
    marginTop:5,
    color: '#808080',

  },

btnBaixar:{
  marginLeft:'80%',
  marginTop:'-15%',
  marginBottom:'15%'


},

textBaixar:{
  paddingTop:15,
  fontSize:15,
  marginTop:5,
  color: '#808080',
  paddingRight:100,

},

});
