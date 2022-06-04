import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducer/cartReducer';
import products from '../products';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products,
        cart: [],
        wishlist: []
    })

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}

export default CartProvider