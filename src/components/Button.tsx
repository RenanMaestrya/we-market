import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.Texto}>Comprar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#1d73b8',
        height: 40,
        width: 70,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center'
    },
    Texto:{
        color: '#fff',
        fontWeight: 'bold'
    }
})