import React, {useState} from 'react';
import './Search.css';

function Search({setSearchQuery = () => {}}) {
    const [query, setQuery] = useState('');
    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        setSearchQuery(query);
        setQuery('');
    }

    return <form onSubmit={handleOnSubmit}>
        <label>Find movies</label>
        <input type="text" name="search-query" aria-label="search-input" value={query} onChange={handleInputChange} />
        <button>Search</button>
    </form>;
}

export default Search;
