import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ItemData } from '../components/DataItems'

interface CartProps {
    children: ReactNode;
}

interface CartContextProps {
    add: (item: ItemData) => void;
    cart: ItemData[];
    totalValue: number;
    totalItems: number;
    remove: (item: ItemData) => void;
}

export const CartContext = createContext({} as CartContextProps )

export function CartProvider({ children }: CartProps) {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const itemsValue = cart.reduce((acc, curr) => acc + curr.count, 0) //contador de itens totais

        setTotalItems(itemsValue)

        const value = cart.reduce((acc, curr) => acc + (curr.price * curr.count), 0); //contador do valor total do carrinho

        setTotalValue(value)

    }, [cart])

    function add (item: ItemData){
        const newCart = cart
        if (!(newCart.includes(item))) {
            newCart.push(item);
            setCart([...newCart]);
        }else {
            item.count += 1;
            const value = cart.reduce((acc, curr) => acc + (curr.count * curr.price), 0);

            setTotalValue(value);
            setCart([...newCart]);
        }
    }

    function remove(item:ItemData){
        let newCart = cart

        if(item.count > 1){
            item.count -= 1;

            setCart([...newCart])
        }else{
            newCart = newCart.filter((currentItem) => currentItem.id != item.id);

            setCart([...newCart]);
        }
        
    }

    const store: CartContextProps = {
        add,
        cart,
        totalValue,
        totalItems,
        remove
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
        totalValue,
        totalItems,
        remove

    } = context

    return {
        cart,
        add,
        totalValue,
        totalItems,
        remove
    }
}