import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const images = { cart: require('../../assets/icons/iconCart.png') }

interface HeaderProps{
    title: string;
    image?: keyof typeof images;
}

export function Header(props: HeaderProps){
    return(
        <View style={styles.Header}>
            {props.image && <Image style={styles.Imagem} source={images[props.image]}/>}
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
        flexDirection: 'row',
    },
    Texto:{
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold'
    },
    Imagem:{
        width: 30,
        height: 30,
        right: 8
    }
})