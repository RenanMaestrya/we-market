import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Cart from '../pages/cart';


const Tab: any = createBottomTabNavigator();

const Tabs: any = () =>{
    <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
}

export default Tabs;