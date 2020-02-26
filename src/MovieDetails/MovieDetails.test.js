import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';


//fields are replaced N/a if they were originally N/A null or empty


//that a movie's details are displayed once it's been clicked on 
test('All movie details are displayed for Star Wars Episode IV - A New Hope', () => {
    const movie = {
        movieId: 82,
        imdbRating: "8.6",
        imdbVotes: "1,104,701",
        runtime: "121 min",
        language: "English",
        rated: "PG",
        production: "20th Century Fox",
        released: "21 Sep 2004",
        imdbid: "tt0076759",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        director: "George Lucas",
        title: "Star Wars: Episode IV - A New Hope",
        actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        awards: "Won 6 Oscars. Another 50 wins & 28 nominations.",
        year: "1977",
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        genre: "Action, Adventure, Fantasy, Sci-Fi",
        writer: "George Lucas"
    }
    const { getByTestId } = render(<MovieDetails movie={movie}/>);

    expect(getByTestId(`imdbRating-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`imdbVotes-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`runtime-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`language-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`rated-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`production-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`released-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`plot-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`director-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`title-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`actors-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`awards-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`year-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`poster-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`genre-${movie.movieId}`)).toBeInTheDocument();
    expect(getByTestId(`writer-${movie.movieId}`)).toBeInTheDocument();




})

//"return to home" button shows up on moviedetails page when moviedetails is rendered

