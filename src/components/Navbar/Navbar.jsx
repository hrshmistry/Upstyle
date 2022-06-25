import { HeartStraight, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar'
import { useCart } from "../../context/cartContext";

const Navbar = () => {
    const { state: { cart, wishlist } } = useCart();

    return (
        <nav>
            <div className='navigation'>
                <Link to={"/"} className='brand n-1'>Upstyle</Link>
                <SearchBar />
                <div className='nav-icons'>
                    <Link to={"/wishlist"} className='cart-container n-3'>
                        <HeartStraight size={30} />
                        <div className='badge'>
                            <span>{wishlist.length}</span>
                        </div>
                    </Link>
                    <Link to={"/cart"} className='cart-container n-3'>
                        <ShoppingCart size={30} />
                        <div className='badge'>
                            <span>{cart.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar