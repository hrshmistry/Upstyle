import React from 'react'
import './ProductCard.css'
import { useCart } from "../../context/cartContext"

const WishlistProduct = ({ product }) => {
    const {
        dispatch
    } = useCart();

    const removeFromWishlist = () => dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product.key
    })

    const moveToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
        removeFromWishlist();
    }

    return (
        <div className="cart-card">
            <div className="cart-card-img">
                <img src={product.imageSrc} alt={product.title} />
            </div>

            <div className='cart-part'>
                <div className='cart-details'>
                    <div className="cart-title">{product.title}</div>
                    <small className="cart-content">
                        {product.shortDetail}
                    </small>
                    <small className="cart-order-id">
                        Order ID #{product.key.slice(0, 6)}
                    </small>
                    <div className="cart-price">
                        <small>Rs.{product.prize} </small>
                        <small className="e-comm-price-cut">Rs.{product.prizeCut}</small>
                        <small className="e-comm-disc"> ({product.discount}% OFF)</small>
                    </div>
                </div>
                <button
                    className="btn btn-primary e-comm-btn remove-btn move-cart-btn"
                    onClick={moveToCart}
                >
                    Move to Cart
                </button>
                <button
                    className="btn btn-primary e-comm-btn remove-btn"
                    onClick={removeFromWishlist}
                >
                    Remove from Wishlist
                </button>
            </div>
        </div>
    )
}

export default WishlistProduct