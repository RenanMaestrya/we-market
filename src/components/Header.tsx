import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps{
    title: string;

}

export function Header(props: HeaderProps){
    return(
        <View style={styles.Header}>
            <Text style={styles.Texto}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header:{
        height: 70,
        backgroundColor:'#1d73b8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texto:{
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold'
    }
})