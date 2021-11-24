import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#dadad8",
        backgroundColor: "white",
        alignItems: 'center',
      },
    canvas:{
        width: 240,
        height: 240,
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    comando:{
        marginTop: 130,
        marginBottom: 15,
        fontSize: 15,
        width: 270,
        color: "#4e4e4b"
    },
    cancelarText:{
        fontSize: 15,
        color: "#4e4e4b"
    },
    cancelar:{
        width: 50,
        height: 50,
        marginTop: 100
    },
    close:{
      width: 40,
      height: 40 
    }
});