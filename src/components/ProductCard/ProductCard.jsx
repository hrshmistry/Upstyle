import React, { useContext } from 'react'
import './ProductCard.css'
import { CartState, CartContext } from "../../context/Context"

const ProductCard = ({ product }) => {
    const {
        state: { cart },
        dispatch
    } = CartState();

    console.log("cart", cart);

    const addToCart = () => dispatch({
        type: "ADD_TO_CART",
        payload: product
    })

    const removeFromCart = () => dispatch({
        type: "REMOVE_FROM_CART",
        payload: product.key
    })

    return (
        <div className="card e-comm-card m-1">
            <img className="img-card" src={product.imageSrc} alt={product.imageAlt} />
            {product.isBadge &&
                <small className="e-comm-badge solid-badge e-comm-badge">
                    {product.badgeName}
                </small>
            }
            <div className="e-comm-title">{product.title}</div>
            <small className="e-comm-content">
                {product.shortDetail}
            </small>
            <div className="e-comm-price">
                <small>Rs.{product.prize} </small>
                <small className="e-comm-price-cut">Rs.{product.prizeCut}</small>
                <small className="e-comm-disc"> ({product.discount}% OFF)</small>
            </div>
            {cart.some(item => item.key === product.key) ? (
                <button
                    className="btn btn-primary e-comm-btn"
                    onClick={removeFromCart}
                >
                    Remove from Cart
                </button>
            ) : (
                <button
                    className="btn btn-primary e-comm-btn"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            )}
        </div>
    )
}

export default ProductCard