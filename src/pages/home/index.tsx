import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { DATA, ItemData } from '../../components/DataItems';
import { useCart } from '../../context/cart';
import { Header } from '../../components/Header';


export const Item = ({data}: {data: ItemData}) => {
  const { add } = useCart()

  return (
  <TouchableOpacity onPress={() => add(data)} style={styles.view}>
    <Image style={styles.image} source={data.image}></Image>
    <Text style={styles.Name}>{data.name}</Text>
    <Text style={{fontSize: 16}}>R${data.price.toFixed(2)}</Text>
  </TouchableOpacity>
)};

export default function Home() {
    return (
      <View style={{flex: 1, backgroundColor: '#2596be'}}>
        <Header title='We Market'/>
        <FlatList style={styles.list}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    list:{ 
      marginBottom: 90 
    },
    view:{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image:{
      width: 50,
      height: 50
    },
    Name:{
      fontSize: 24, 
      marginRight: 'auto', 
      paddingLeft: 10, 
      paddingTop:10
    }
})