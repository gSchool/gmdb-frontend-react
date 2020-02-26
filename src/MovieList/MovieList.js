import React, {useContext} from 'react';
import {NavigationContext} from '../Navigation.utils';
import './MovieList.css';

function MovieList({movies}) {
    const {dispatch} = useContext(NavigationContext);
    function selectMovie(event){
        dispatch({ type: 'MovieDetails', payload: +(event.target.dataset.key)})
    }
    return <>
        <header data-testid="movie-header">Movies</header>
        {movies.length ? movies.map(movie => 
            (<h3 key={movie.movieId} onClick={selectMovie} data-key={movie.movieId} className="movie">{movie.title}</h3>)) 
            : (<p>No movies found.</p>)}
    </>;
}

export default MovieList;
