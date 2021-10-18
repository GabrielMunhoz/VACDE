import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    whiteSpace: {
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center"
    },
    logo:{
        height: 200,
        width: 200,
        marginTop: 10,
        marginBottom: 10
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
    icon:{
        color: "gray",
        height: 20,
        width: 20
    },
    inputRow:{
        flexDirection: "row"
    },
    btnSecondary:{
        width: 145,
        marginRight: 10
    },
    flexRow:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    },
    btnIcon:{
        width: 30,
        height: 30,
        borderRadius: 50
    },
    icon: {
        width: 30,
        height: 30
    },
    data:{
        color: "gray",
        fontSize: 30
    },
    welcome:{
        fontSize: 30,
        marginTop: 50
    },
    qrcode:{
        width: 270,
        height: 60,
        backgroundColor: "#36C1AA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    qrcodetext:{
        color: "white",
        fontSize: 20
    }
  });