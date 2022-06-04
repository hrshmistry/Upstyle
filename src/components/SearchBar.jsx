import { MagnifyingGlass } from 'phosphor-react';
import React from 'react'

const SearchBar = () => {
    const handleSearch = (event) => {
        event.preventDefault();
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSearch}>
            <MagnifyingGlass size={20} color="#1D4354" weight="bold" />
                <input type='text' placeholder='Search' />
            </form>
        </div>
    )
}

export default SearchBar