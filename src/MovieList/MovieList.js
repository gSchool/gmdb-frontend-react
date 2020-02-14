import React from 'react';
import './MovieList.css';

function MovieList({movies}) {
    return <>
        <header>Movies</header>
        {movies.length ?(<h3 className="movie">{movies[0].title}</h3>) : null}
    </>;
}

export default MovieList;
