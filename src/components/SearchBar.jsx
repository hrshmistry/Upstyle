import { MagnifyingGlass } from 'phosphor-react';
import React from 'react'
import { useCart } from '../context/cartContext';

const SearchBar = () => {
    const {
        inputRef
    } = useCart();

    const handleSearch = (event) => {
        event.preventDefault();
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSearch} className="search-bar-form">
                <MagnifyingGlass size={20} color="#1D4354" weight="bold" />
                <input
                    type='text'
                    placeholder='Search for products, brands and more'
                    ref={inputRef}
                />
                <div className='search-shortcut'>[/]</div>
            </form>
        </div>
    )
}

export default SearchBar