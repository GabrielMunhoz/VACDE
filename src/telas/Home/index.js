import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import api from '../../Services/api';

import { styles } from './style';

export default function Home({route, navigation}){

    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");

    React.useEffect(()=>{
        // async function userInformations(){
        //     const response = await api.get(`/usuario/buscaInfoUsuario/${userId}`);
        //     setNome(response.data.usuario.nome);
        //     setCpf(response.data.usuario.cpf);
        // }

        // userInformations();
        setCpf("867.029.550-49");
        setNome("Gabriel Munhoz de Oliveira");
    }, []);

    return(
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.whiteSpace} >
                    <Text style={styles.welcome} >Seja bem vindo!</Text>
                    <Image style={styles.logo} source={require('../../../assets/img/home-logo.jpeg')} />
                    <View style={styles.flexRow} >
                        <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate("Login")} >
                            <Image style={styles.icon}  source={require('../../../assets/img/logout-icon.jpeg')} />
                        </TouchableOpacity>
                        <Text style={styles.data} >Seus Dados</Text>
                        <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate("AtualizarCadastro")}>
                            <Image style={styles.icon} source={require('../../../assets/img/configuration-icon.jpeg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainContent} >
                    <TextInput label="(1 nome) / (idade)" value={nome} style={styles.btnPrimary} left={<TextInput.Icon color="gray" name="account-circle-outline" />}/>
                    <TextInput label="(CPF do usuário)" value={cpf} style={styles.btnPrimary} left={<TextInput.Icon color="gray" name="newspaper-variant-multiple-outline" />}/>
                    <TextInput label="(Laboratório da vacina)" style={styles.btnPrimary} left={<TextInput.Icon color="gray" name="hospital-building" />}/>
                    <View style={styles.inputRow} >
                        <TextInput label="(Data 1 dose)" value={"02/11/2021"} style={[styles.btnPrimary, styles.btnSecondary, {marginLeft: 7}]} left={<TextInput.Icon color="gray" name="bottle-tonic-plus-outline" />}/>
                        <TextInput value={"10/11/2021"} style={[styles.btnPrimary,  styles.btnSecondary]} left={<TextInput.Icon color="gray" name="bottle-tonic-plus-outline" />} right={<TextInput.Icon color="gray" name="plus-circle-outline" />}/>
                    </View>
                    <View style={styles.inputRow} >
                        <TextInput style={[styles.btnPrimary, styles.btnSecondary, {marginLeft: 7}]} left={<TextInput.Icon color="gray" name="bottle-tonic-plus-outline" />} right={<TextInput.Icon color="gray" name="plus-circle-outline" />}/>
                        <TextInput style={[styles.btnPrimary, styles.btnSecondary]} left={<TextInput.Icon color="gray" name="bottle-tonic-plus-outline" />} right={<TextInput.Icon color="gray" name="plus-circle-outline" />}/>
                    </View>
                    <TouchableOpacity style={styles.qrcode} onPress={()=> navigation.navigate("TelaQRCodeGerado")} >
                        <Text style={styles.qrcodetext} >Gerar meu QR Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}