export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.key !== payload)
            }

        case 'ADD_TO_WISHLIST':
            const index = state.products.findIndex(item => item.key === payload.key);
            const newProducts = [...state.products];
            newProducts[index].inWishlist = true;

            return {
                ...state,
                products: newProducts,
                wishlist: [...state.wishlist, payload]
            }

        case 'REMOVE_FROM_WISHLIST':
            const removeIndex = state.products.findIndex(item => item.key === payload);
            const prod = [...state.products];
            prod[removeIndex].inWishlist = false;

            return {
                ...state,
                products: prod,
                wishlist: state.wishlist.filter(item => item.key !== payload)
            }

        default:
            break;
    }
}