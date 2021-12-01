import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Cadastro_2parte({navigation}) {

  const [cpf, setData] = useState('');
  const [email, setCpf] = useState('');
  const [senha, setLab] = useState('');
  const [confirmesenha, setDatadose] = useState('');

  async function imagePickerCall(){
    if(Constants.platform.ios){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if(!status !== 'granted'){
        alert("Nós precisamos desta permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if(data.cancelled){
      return;
    }

    if(!data.uri){
      return;
    }

    const dataForm = new FormData();

    dataForm.append("carteira", {
      uri: data.uri
    })
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
        <TouchableOpacity style={styles.btnBaixar} onPress={imagePickerCall}>
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