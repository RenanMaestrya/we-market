import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Tabs from './src/navigation/tabs';
import { AppContextProvider } from './src/context/provider';

export default function App() {
    return (
      <AppContextProvider>
        <NavigationContainer>
          <Tabs/>
          <StatusBar style="auto" />
        </NavigationContainer>
      </AppContextProvider>
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
