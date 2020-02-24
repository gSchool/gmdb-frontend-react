import React from 'react';
import './App.css';
import MovieList from './MovieList';
import {useMoviesFromDatabase} from './App.hooks'

function App() {

  let {movies, error} = useMoviesFromDatabase()


    
    // return <MovieList movies={movies} />
    return !error ? <MovieList movies={movies} /> : <p>Whoops, something went wrong</p>;
}

export default App;
