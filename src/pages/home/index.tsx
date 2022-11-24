import React from 'react';
import { View, FlatList, Text } from 'react-native';

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
    ]

    const Item = ({data}: {data: ItemData}) => (
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 10,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 24}}>{data.name}</Text>
        </View>
      );

    return (
        <View style={{flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
      </View>
    );
  }