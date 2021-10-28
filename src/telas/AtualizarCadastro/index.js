import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function AtualizarCadastro({navigation}){
    return(
        <ScrollView>
            <View style={styles.container} > 
                <View style={styles.whiteSpace} >
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <Image style={styles.voltar} source={require('../../../assets/img/voltar.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.updateData} >Atualizar seus Dados</Text>
                </View>
                <View style={styles.mainContent} >
                    <View style={{flexDirection: "row"}} >
                        <Text style={styles.upload} >Faça o upload de sua Carteira de Vacinação Digital</Text>
                        <TouchableOpacity style={styles.botaoAtualizar} >
                            <Image style={styles.uploadimg} source={require('../../../assets/img/upload-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row"}} >
                        <Text style={styles.lembrete} >Procure sempre manter suas vacinas atualizadas!</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}