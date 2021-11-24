import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
      fontWeight: "normal",
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