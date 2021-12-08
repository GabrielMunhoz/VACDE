import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import api from '../../Services/api';

export default function Cadastro_2parte({navigation}) {

  const [cpf, setData] = useState('');
  const [email, setCpf] = useState('');
  const [senha, setLab] = useState('');
  const [confirmesenha, setDatadose] = useState('');
  const [primeiradose, setPrimeiradose] = useState("");
  const [segundaDose, setSegundaDose] = useState("");

  const infoUser = async () =>{
    const response = await api.get(`/usuario/buscaInfoUsuario/${id}`);
    setPrimeiradose(response.data.vacina.primeiradose);
    setSegundaDose(response.data.vacina.segundadose);
    navigation.navigate("Cadastro", {primeira: primeiradose, segunda: segundaDose});
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity style={{marginRight:'80%'}} onPress={()=>navigation.navigate("Cadastro")}>
        <Image style={{width:50, height:50}} source={require('../../../assets/img/voltar.jpg')} />
      </TouchableOpacity>

      <Text style={styles.textConectsus}>Para continuar, entre no seu ConecteSUS</Text>
      <nav>
        <Text style={styles.textBaixar}>Faça o upload de sua{"\n"}Carteira de Vacinação Digital</Text>        
        <TouchableOpacity style={styles.btnBaixar} onPress={infoUser}>
          <Image style={{width:50,height:50}} source={require('../../../assets/img/botaobaixar.jpg')} />
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