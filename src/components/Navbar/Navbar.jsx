import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar'

const Navbar = () => {
    return (
        <nav>
            <div className='navigation'>
                <Link to={"/"} className='brand'>Shopping Cart</Link>
                <SearchBar />
                <Link to={"/cart"} className='cart-container'>
                    <ShoppingCart size={32} />
                    <div className='badge'>
                        <span>5</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar