import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Cart from '../pages/cart';



const Tab: any = createBottomTabNavigator();

const Tabs: any = () =>{
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundcolor: '#8fcbbc',
                    borderRadius: 15,
                    height: 50,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
    
}

export default Tabs;