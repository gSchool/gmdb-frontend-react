import React, {useState} from 'react';
import './Search.css';

function Search({setSearchQuery = () => {}}) {
    const [query, setQuery] = useState('');
    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setSearchQuery(query);
        setQuery('');
    }

    return <form onSubmit={handleOnSubmit}>
        <label>Find movies</label>
        <input type="text" name="search-query" aria-label="search-input" value={query} onChange={handleInputChange} />
        <input type="submit" value="Search" />
    </form>
}

export default Search;
