import React from 'react'
import './ProductCard.css'
import { useCart } from "../../context/cartContext"
import { Link } from 'react-router-dom';
import { HeartStraight } from 'phosphor-react';

const ProductCard = ({ product }) => {
    const {
        state: { cart },
        dispatch
    } = useCart();

    const addToCart = () => dispatch({
        type: "ADD_TO_CART",
        payload: product
    })

    const addToWishlist = () => dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product
    })

    const removeFromWishlist = () => dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product.key
    })

    return (
        <div className="card e-comm-card m-1">
            <div className='add-to-wishlist'>
                <HeartStraight
                    onClick={product?.inWishlist ? removeFromWishlist : addToWishlist}
                    color="#143240"
                    size={20}
                    weight={product?.inWishlist ? "fill" : "regular"}
                />
            </div>
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
                <Link to={"/cart"} className="go-to-cart">
                    <button
                        className="btn btn-primary e-comm-btn btn-go"
                    >
                        Go to Cart
                    </button>
                </Link>
            ) : (
                <button
                    className="btn btn-primary e-comm-btn btn-pro"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            )}
        </div>
    )
}

export default ProductCard