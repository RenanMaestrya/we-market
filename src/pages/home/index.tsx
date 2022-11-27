import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { DATA } from '../../components/DataItems';

export interface ItemData {
  id: string;
  name: string;
  price: number;
}

export const Item = ({data}: {data: ItemData}) => (
  <TouchableOpacity
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
    <Text style={{fontSize: 16}}>${data.price}</Text>
  </TouchableOpacity>
);

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