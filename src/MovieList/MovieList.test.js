import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';


test('Transformers is the 1 movie in the array, so Transformers will show up on the screen', () => {
    const movieTitle = 'Transformers'
    const { getByText } = render(<MovieList movies={[{title: movieTitle}]} />);
    const movieTitleElement = getByText(movieTitle);
    expect(movieTitleElement).toBeInTheDocument();
});

test('Lord of the Rings is the 1 movie in the array, so Lord of the Rings will be the ONLY movie to show up on the screen', () => {
    const movieTitle = "Lord of the Rings"
    const nonExistentMovieTitle = "Harry Potter"
    const { getByText, queryByText } = render(<MovieList movies={[{title: movieTitle}]} />); 
    const movieTitleElement = getByText(movieTitle); 
    const nonExistentMovieTitleElement = queryByText(nonExistentMovieTitle); 
    expect(movieTitleElement).toBeInTheDocument(); 
    expect(nonExistentMovieTitleElement).not.toBeInTheDocument();
})

test('message is displayed when no movies are present', () => {
    const noMoviesMessage = "No movies found."
    const { getByText } = render(<MovieList movies={[]} />);
    const noMoviesMessageElement = getByText(noMoviesMessage);
    expect(noMoviesMessageElement).toBeInTheDocument();
})