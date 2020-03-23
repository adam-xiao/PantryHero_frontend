import React, { Component, useState } from 'react';

function Search (props) {
    const [search, setSearch] = useState("")


    const handleOnChange = e => setSearch(e.target.value)

    const handleOnSubmit = e => {
        e.preventDefault()
        props.handleSearchBar(search)
    }


    return (
        <form onSubmit={handleOnSubmit}>
            Search: <input type="text" value={search} onChange={handleOnChange} /> 
            <button type="submit">Search Food</button>

        </form>
    )

}

export default Search

