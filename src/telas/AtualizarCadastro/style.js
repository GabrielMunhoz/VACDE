import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#FAFAFA',
      backgroundColor: "#E7EAEA",
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteSpace: {
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        paddingLeft: 30,
        paddingBottom: 7,
        paddingTop: 20
    },
    mainContent:{
        flexDirection: "column",
        height: "auto",
        paddingTop: 30,
        width: "100%",
        elevation: 3,
        borderColor: "gray",
        paddingBottom: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnPrimary:{
        width: 300,
        borderColor: "gray",
        borderWidth: 2,
        backgroundColor: "white",
        marginBottom: 10
    },
    updateData:{
        marginTop: 20,
        color: "gray",
        fontSize: 18,
        fontWeight: "bold"
    },
    lembrete:{
        marginTop: 370,
        fontSize: 15,
        color: "gray",
        fontWeight: "bold",
        width: 200
    },
    icon:{
        color: "gray",
        height: 20,
        width: 20
    },
    voltar:{
        width: 40,
        height: 40
    },
    upload:{
        color: "gray",
        width: 200,
        fontSize: 13
    },
    botaoAtualizar:{
        width: 55,
        backgroundColor: "#4DC1C1",
        borderRadius: 25,
        border: "none",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    uploadimg:{
        width: 20,
        height: 20
    }
  });