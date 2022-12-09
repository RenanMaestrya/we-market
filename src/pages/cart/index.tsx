import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useCart } from '../../context/cart';
import { Header } from '../../components/Header';


export interface ItemData {
  id: string;
  name: string;
  price: number;
  count: number;
}

export const Item = ({data}: {data: ItemData}) => {
  const { remove } = useCart()
  
  return (
    <TouchableOpacity onPress={() => remove(data)}
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
    <Text style={{fontSize: 24}}>{data.name} {data.count}x </Text>
    <Text style={{fontSize: 16}}>R${data.price}</Text>
  </TouchableOpacity>
)};

export default function Cart() {
  const { cart, totalValue } = useCart() 
  return (
      <View style={{flex: 1, backgroundColor: '#2596be'}}>
        <Header title='Cart'/>
        <FlatList
          data={cart}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
        <Text style={styles.totalValue}>Total no Carrinho: R${totalValue.toFixed(2)}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    totalValue:{
      fontSize: 16,
      backgroundColor: '#fff',
      padding: 25,
      height: 70,
      bottom: 80,
    }
})