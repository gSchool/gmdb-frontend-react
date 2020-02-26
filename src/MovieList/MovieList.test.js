import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';


test('Transformers is the 1 movie in the array, so Transformers will show up on the screen', () => {
    const movie = {movieId: 474, title: 'Transformers'};
    const { getByText } = render(<MovieList movies={[movie]} />);
    const movieTitleElement = getByText(movie.title);
    expect(movieTitleElement).toBeInTheDocument();
});

test('Lord of the Rings is the 1 movie in the array, so Lord of the Rings will be the ONLY movie to show up on the screen', () => {
    const movie = {movieId: 878, title: 'Lord of the Rings'}
    const nonExistentMovieTitle = 'Harry Potter'
    const { getByText, queryByText } = render(<MovieList movies={[movie]} />); 
    const movieElement = getByText(movie.title); 
    const nonExistentMovieTitleElement = queryByText(nonExistentMovieTitle); 
    expect(movieElement).toBeInTheDocument(); 
    expect(nonExistentMovieTitleElement).not.toBeInTheDocument();
})

test('message is displayed when no movies are present', () => {
    const noMoviesMessage = "No movies found."
    const { getByText } = render(<MovieList movies={[]} />);
    const noMoviesMessageElement = getByText(noMoviesMessage);
    expect(noMoviesMessageElement).toBeInTheDocument();
})

test('When Scream and Frozen are in the array, both movies will be rendered on the screen', () => {
    const firstMovie = {movieId:234 , title: "Scream" }
    const secondMovie = { movieId: 483, title: "Frozen" }
    const { getByText } = render(<MovieList movies={[firstMovie, secondMovie]} />);
    const firstMovieElement = getByText(firstMovie.title)
    const secondMovieElement = getByText(secondMovie.title)
    expect(firstMovieElement).toBeInTheDocument(); 
    expect(secondMovieElement).toBeInTheDocument();
})