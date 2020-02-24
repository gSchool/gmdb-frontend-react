import React from 'react';
import './MovieList.css';

function MovieList({movies}) {
    return <>
        <header data-testid="movie-header">Movies</header>
        {movies.length ? movies.map(movie => (<h3 key={movie.id} className="movie">{movie.title}</h3>)) : (<p>No movies found.</p>)}
    </>;
}

export default MovieList;
