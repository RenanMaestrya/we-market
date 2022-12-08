import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Tabs from './src/navigation/tabs';
import { CartProvider } from './src/context/cart';

export default function App() {
    return (
      <CartProvider>
        <NavigationContainer>
          <Tabs/>
          <StatusBar style="auto" />
        </NavigationContainer>
      </CartProvider>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
