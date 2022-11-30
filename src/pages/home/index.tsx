import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { DATA, ItemData } from '../../components/DataItems';
import { useCart } from '../../context/cart';


export const Item = ({data}: {data: ItemData}) => {
  const { add } = useCart()

  return (
  <TouchableOpacity onPress={() => add(data)}
    style={{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <Text style={{fontSize: 24}}>{data.name}</Text>
    <Text style={{fontSize: 16}}>R${data.price}</Text>
  </TouchableOpacity>
)};

export default function Home() {
    return (
      <View style={{flex: 1, backgroundColor: '#2596be'}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
      </View>
    );
  }