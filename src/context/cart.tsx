import { createContext, ReactNode, useEffect, useState } from 'react';

import ItemProps from '../pages/home'

interface CartProps {
    children: ReactNode;
}

export const CartContext = createContext({})

export function CartProvider({ children }: CartProps) {
    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()

    function add (item){
        const newCart = cart
        newCart.push(item)

        setCart(newCart)
    }
}
