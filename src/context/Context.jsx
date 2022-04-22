import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducer/cartReducer';
import products from '../products';

export const CartContext = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products,
        cart: [],
    })

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const CartState = () => {
    return useContext(CartContext);
}

export default Context