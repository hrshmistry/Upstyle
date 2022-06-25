import React, { createContext, useContext, useReducer, useRef } from 'react'
import { cartReducer } from '../reducer/cartReducer';
import products from '../products';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products,
        cart: [],
        wishlist: []
    })

    const inputRef = useRef(null);

    return (
        <CartContext.Provider value={{ state, dispatch, inputRef }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}

export default CartProvider