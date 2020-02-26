import React from 'react';
import './MovieDetails.css';

function MovieDetails({movie}) {

    return (<>
        <img src={movie.poster && movie.poster !== 'N/A' ? movie.poster : `https://cdn.windowsreport.com/wp-content/uploads/2018/02/Kernel-Power-41-error-in-Windows-10.jpg`} data-testid={`poster-${movie.movieId}`} alt={`Poster art for ${movie.title}`}/>
        <h3 data-testid={`title-${movie.movieId}`}>{movie.title}</h3>
        
        <p>
            <span data-testid={`imdbRating-${movie.movieId}`}>Rating: {movie.imdbRating}</span>
            <span data-testid={`imdbVotes-${movie.movieId}`}>Votes: {movie.imdbVotes}</span>
        </p>
        <p>
            <span data-testid={`runtime-${movie.movieId}`}>Runtime: {movie.runtime}</span>
            <span data-testid={`language-${movie.movieId}`}>Language: {movie.language}</span>
            <span data-testid={`rated-${movie.movieId}`}>Rating: {movie.rated}</span>
            <span data-testid={`production-${movie.movieId}`}>Production Company:{movie.production}</span>
        </p>

        <h6 data-testid={`released-${movie.movieId}`}>Release Date: {movie.released}</h6>
        <h6 data-testid={`director-${movie.movieId}`}>Director: {movie.director}</h6>
        <h6 data-testid={`actors-${movie.movieId}`}>Cast: {movie.actors}</h6>
        <h6 data-testid={`awards-${movie.movieId}`}>Awards: {movie.awards}</h6>
        <h6 data-testid={`year-${movie.movieId}`}>Year Released{movie.year}</h6>
        <h6 data-testid={`genre-${movie.movieId}`}>Genre: {movie.genre}</h6>
        <h6 data-testid={`writer-${movie.movieId}`}>Writer: {movie.writer}</h6>
        <h3>Plot</h3><p data-testid={`plot-${movie.movieId}`}>{movie.plot}</p>
    </>);
}
export default MovieDetails;