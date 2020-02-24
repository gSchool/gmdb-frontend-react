import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';
import {useMoviesFromDatabase} from './App.hooks'

jest.mock('axios')

//TODO: figure out how to use act function to get rid of warning

test('renders MovieList when there are no movies', () => {
  axiosMock.mockResolvedValueOnce({
    data: []
  });
  const { getByTestId } = render(<App />);
  const movieListTitle = getByTestId('movie-header');
  expect(movieListTitle).toBeInTheDocument();
});

test('network call to get movie data fails', async () => {
  axiosMock.mockRejectedValueOnce({
    error: "idk",
    status: 500
  })
  const { getByText } = render(<App />); 
  
  
  const errorMessage = await waitForElement(
    () => getByText(/Whoops, something went wrong/i)
  )
  expect(errorMessage).toBeInTheDocument();
})

test('Harry Potter is the 1 movie in the array so Harry Potter is the one movie that will show up on the screen', async () => {
  const movieTitle = 'Harry Potter';

  axiosMock.mockResolvedValueOnce({
    data: [{
      "title": movieTitle
    }]
  })

  const { debug, getByText, rerender } = render(<App />); 

  const singleMovieOnScreen = await waitForElement(
    () => getByText(movieTitle)
  )
  expect(singleMovieOnScreen).toBeInTheDocument();
})