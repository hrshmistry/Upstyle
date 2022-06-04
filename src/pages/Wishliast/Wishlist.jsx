import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/cartContext';
import '../Cart/Cart.css'
import { Link } from 'react-router-dom';
import EMPTY_CART from '../../assets/images/empty_cart.svg'
import WishlistProduct from '../../components/ProductCard/WishlistProduct';

const Wishlist = () => {
    const { state: { wishlist } } = useCart();

    return (
        <div className="cart">
            {wishlist.length === 0
                ? (
                    <div className="cart-empty">
                        <img src={EMPTY_CART} alt="empty cart" />
                        <h3>Your Wishlist is empty</h3>
                        <p>
                            You can add products to your wishlist by clicking on the "Heart" Icon on the
                            {" "}<Link to={"/"}>Product Page</Link>
                        </p>
                    </div>
                )
                : (
                    <>
                        <div className="cart-info">
                            <h3>Wishlist Items {wishlist.length}</h3>
                        </div>
                        {wishlist.map((product, i) => {
                            return (<div key={product.key + i}>
                                <WishlistProduct product={product} />
                            </div>)
                        })
                        }
                    </>
                )
            }
        </div>
    )
}

export default Wishlist