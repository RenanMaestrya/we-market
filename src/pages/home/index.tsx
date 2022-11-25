import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

export interface ItemData {
    id: string;
    name: string;
    price: number;
}
export default function Home() {
    

    const DATA = [
      {
          id: '1',
          name: "Macarrão Instantâneo",
          price: 1.95,
      },
      {
          id: '2',
          name: "Sabonete",
          price: 3,
      },
      {
          id: '3',
          name: "Picanha",
          price: 61.90,
      },
      {
          id: '4',
          name: "Cerveja",
          price: 2.95,
      },
    ]

    const Item = ({data}: {data: ItemData}) => (
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
          <Text style={{fontSize: 16}}>{data.price}</Text>
        </TouchableOpacity>
      );

    return (
      <View style={{flex: 1, backgroundColor: '#00004a'}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
      </View>
    );
  }