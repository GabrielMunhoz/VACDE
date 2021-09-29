import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "auto",
    },
    whiteSpace: {
        justifyContent: "center",
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
    },
    mainContent:{
        flexDirection: "column",
        height: "auto",
        elevation: 10,
        paddingTop: 60,
        width: "100%",
        elevation: 3,
        borderColor: "gray",
        paddingBottom: 60,
        borderRadius: 10
    },
    logo:{
        height: 200,
        width: 200,
        marginLeft: 75,
        marginTop: 40,
        marginBottom: 10
    },
    input:{
        borderColor: "#5D6362",
        height: 50,
        borderStyle: 'solid',
        marginLeft: 40,
        borderWidth: 1,
        width: 280,
        borderRadius: 20,
        elevation: 3
    },
    label:{
        color: "#D7CFCE",
        marginLeft: 50,
    },
    btnNew:{
        width: 250,
        marginLeft: 60,
        elevation: 20,
        marginTop: 17,
        height: 50,
        borderColor: "gray",
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    btnNewText:{
        fontWeight: "bold",
        fontSize: 23,
        color: "#63D8CF"
    },
    btnEntryText:{
        color: "#63D8CF", 
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 3
    },
    btnEntry:{
        marginLeft: 210,
        elevation: 1,
        height: 40,
        width: 110,
        borderColor: "gray",
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 12
    }
  });