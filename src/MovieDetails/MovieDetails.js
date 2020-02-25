import React from 'react';
import './MovieDetails.css';

function MovieDetails({movie}) {

    return (<>
        <img src={movie.poster} data-testid={`poster-${movie.movieId}`} />
        <h3 data-testid={`title-${movie.movieId}`}>{movie.title}</h3>
        
        <p>
            <span data-testid={`imdbRating-${movie.movieId}`}>{movie.imdbRating}</span>
            <span data-testid={`imdbVotes-${movie.movieId}`}>{movie.imdbVotes}</span>
        </p>
        <p>
            <span data-testid={`runtime-${movie.movieId}`}>{movie.runtime}</span>
            <span data-testid={`language-${movie.movieId}`}>{movie.language}</span>
            <span data-testid={`rated-${movie.movieId}`}>{movie.rated}</span>
            <span data-testid={`production-${movie.movieId}`}>{movie.production}</span>
        </p>

        <h6 data-testid={`released-${movie.movieId}`}>{movie.released}</h6>
        <p data-testid={`plot-${movie.movieId}`}>{movie.plot}</p>
        <h6 data-testid={`director-${movie.movieId}`}>{movie.director}</h6>
        <h6 data-testid={`actors-${movie.movieId}`}>{movie.actors}</h6>
        <h6 data-testid={`awards-${movie.movieId}`}>{movie.awards}</h6>
        <h6 data-testid={`year-${movie.movieId}`}>{movie.year}</h6>
        <h6 data-testid={`genre-${movie.movieId}`}>{movie.genre}</h6>
        <h6 data-testid={`writer-${movie.movieId}`}>{movie.writer}</h6>
    </>);
}
export default MovieDetails;