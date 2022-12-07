import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ItemData } from '../components/DataItems'

interface CartProps {
    children: ReactNode;
}

interface CartContextProps {
    add: (item: ItemData) => void;
    cart: ItemData[];
    totalValue: number;
}

export const CartContext = createContext({} as CartContextProps )

export function CartProvider({ children }: CartProps) {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        const value = cart.reduce((acc, curr) => acc + curr.price, 0);

        setTotalValue(value)

    }, [cart])

    function add (item: ItemData){
        const newCart = cart
        if (!(newCart.includes(item))) {
            newCart.push(item);
            setCart([...newCart]);
         } else {
            console.log('me ajuda!!!')
        }
    }

    const store: CartContextProps = {
        add,
        cart,
        totalValue
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue
    } = context

    return {
        cart,
        add,
        totalValue
    }
}