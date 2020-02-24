import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';


test('Transformers is the 1 movie in the array, so Transformers will show up on the screen', () => {
    const movie = {id: '16acb317-8d59-463b-bb0b-d3bef539cfdf', title: 'Transformers'};
    const { getByText } = render(<MovieList movies={[movie]} />);
    const movieTitleElement = getByText(movie.title);
    expect(movieTitleElement).toBeInTheDocument();
});

test('Lord of the Rings is the 1 movie in the array, so Lord of the Rings will be the ONLY movie to show up on the screen', () => {
    const movie = {id: '16ec3b41-4dee-40e9-9225-c051acc596f3', title: 'Lord of the Rings'}
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
    const firstMovie = {id:"3d44e658-5ac7-45c4-9d9f-a0c562f1ffc6" , title: "Scream" }
    const secondMovie = { id: "a0a9c275-9ce8-4721-8678-4bd9af349814", title: "Frozen" }
    const { getByText } = render(<MovieList movies={[firstMovie, secondMovie]} />);
    const firstMovieElement = getByText(firstMovie.title)
    const secondMovieElement = getByText(secondMovie.title)
    expect(firstMovieElement).toBeInTheDocument(); 
    expect(secondMovieElement).toBeInTheDocument();
})