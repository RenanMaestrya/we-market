import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useCart } from '../../context/cart';


export interface ItemData {
  id: string;
  name: string;
  price: number;
}

export const Item = ({data}: {data: ItemData}) => {
  
  return (
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
    <Text style={{fontSize: 16}}>R${data.price}</Text>
  </TouchableOpacity>
)};

export default function Cart() {
  const { cart, totalValue } = useCart() 
  return (
      <View style={{flex: 1, backgroundColor: '#2596be'}}>
        <FlatList
          data={cart}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
        <Text style={styles.totalValue}>Total no Carrinho: {totalValue}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    totalValue:{
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      borderColor: '#1d73b8'
    }
})