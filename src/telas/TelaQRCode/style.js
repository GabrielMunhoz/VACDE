import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6E6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    containerQr: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 45,
      borderColor: 'white'
    },
  
    text: {
      textAlign: 'center',
      fontSize:16,
      opacity:.70,
      marginBottom:18
  
    },
    textInput: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      margin: 10,
    },
    btnVoltar: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:60
    },
  
    btnCancelar: {
      justifyContent: 'center',
      opacity:.60,
      fontSize:17
    }
  
  });