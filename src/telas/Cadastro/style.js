import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // backgroundColor: '#E7EAEA',
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
    marginBottom:25,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray"
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
    // color: '#808080',
    color: "gray",
    marginRight:'50%'

  }
  
  });