import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Search from './Search';
import {useMoviesFromDatabase} from './App.hooks'

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  let { movies, error } = useMoviesFromDatabase(searchQuery);


    
    // return <MovieList movies={movies} />
    return (<>
      <Search setSearchQuery={setSearchQuery}/>
      {!error ? <MovieList movies={movies} /> : <p>Whoops, something went wrong</p>}
    </>);
}

export default App;
