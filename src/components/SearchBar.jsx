import React from 'react'

const SearchBar = () => {
    const handleSearch = (event) => {
        event.preventDefault();
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSearch}>
                <input type='text' placeholder='Search' />
            </form>
        </div>
    )
}

export default SearchBar