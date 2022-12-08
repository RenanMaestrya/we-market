import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Cart from '../pages/cart';

import { useCart } from '../context/cart';

const Tab = createBottomTabNavigator();



const Tabs = () =>{
    const { totalItems } = useCart()

    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{   /* <<<<<PAGE HOME>>>>>  */
                title: 'We Market',
                headerStyle: {
                  backgroundColor: '#1d73b8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1d73b8' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#1d73b8' : '#748c94', fontSize: 12}}>HOME</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{  /* <<<<<PAGE CART>>>>>  */
                tabBarBadge: totalItems,
                headerStyle: {
                  backgroundColor: '#1d73b8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/cart.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1d73b8' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#1d73b8' : '#748c94', fontSize: 12}}>CART</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    )
    
}



const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5D70',
        shadowOffset: {
            width: 30,
            height: 20,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5,
        elevetion: 5,
    },
})

export default Tabs;