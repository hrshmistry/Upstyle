import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar'
import { useCart } from "../../context/cartContext";

const Navbar = () => {
    const { state: { cart } } = useCart();

    return (
        <nav>
            <div className='navigation'>
                <Link to={"/"} className='brand n-1'>Shopping Cart</Link>
                <SearchBar />
                <Link to={"/cart"} className='cart-container n-3'>
                    <ShoppingCart size={32} />
                        <div className='badge'>
                            <span>{cart.length}</span>
                        </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar