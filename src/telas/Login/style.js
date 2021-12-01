import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "auto",
        padding: 10,
        backgroundColor: "#E7EAEA"
    },
    whiteSpace: {
        justifyContent: "center",
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        paddingBottom: 15
    },
    mainContent:{
        flexDirection: "column",
        height: "auto",
        // elevation: 10,
        paddingTop: 60,
        width: "100%",
        // elevation: 3,
        borderColor: "gray",
        paddingBottom: 60,
        borderRadius: 10,
        // backgroundColor: "#E6E8E8"
        
    },
    logo:{
        height: 200,
        width: 200,
        // marginLeft: 75,
        marginTop: 40,
    },
    input:{
        borderColor: "gray",
        height: 50,
        borderStyle: 'solid',
        marginLeft: 40,
        borderWidth: 2,
        width: 280,
        borderRadius: 20,
        // elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    label:{
        color: "gray",
        marginLeft: 50,
    },
    btnNew:{
        width: 250,
        // marginLeft: 60,
        // elevation: 20,
        marginTop: 17,
        height: 50,
        borderColor: "gray",
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#CED1D1"
    },
    btnNewText:{
        fontWeight: "bold",
        fontSize: 23,
        color: "#686969"
    },
    btnEntryText:{
        color: "#686969", 
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 3
    },
    btnEntry:{
        marginLeft: 210,
        // elevation: 1,
        height: 40,
        width: 110,
        borderColor: "gray",
        // elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 12,
        backgroundColor: "#CED1D1"
    },
    title:{
        fontSize: 35,
        color: "#00BBE4",
        marginTop: 5,
        fontWeight: "bold"
    }
  });