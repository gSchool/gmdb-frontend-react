import React from 'react';
import './MovieList.css';

function MovieList({movies}) {
    return <>
        <header data-testid="movie-header">Movies</header>
        {movies.length ?(<h3 className="movie">{movies[0].title}</h3>) :(<p>No movies found.</p>)}
    </>;
}

export default MovieList;
