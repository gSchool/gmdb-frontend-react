import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent, cleanup } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

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

test('Searching for "How to Lose A Guy in 10 Days" filters the displayed movies down to 1 result', async () => {
  const movieTitle = "How to Lose A Guy in 10 Days";
  const otherMovieTitle = "Failure to Launch";

  axiosMock.mockResolvedValueOnce({
    data: [
      {
        "id": "db0542eb-f100-476b-ac63-fda81ce18514",
        "title": otherMovieTitle
      },
      {
        "id": "971869b4-cd2c-42f0-9004-5e5b7541be62",
        "title": movieTitle
      }]
  })

  axiosMock.mockResolvedValueOnce({
    data: [{
      "id": "971869b4-cd2c-42f0-9004-5e5b7541be62",
      "title": movieTitle
    }]
  })

  const { getByText, rerender, getByLabelText, queryByText } = render(<App />);

  const otherMovie = await waitForElement(
    () => getByText(otherMovieTitle)
  )
  const bestMovie = await waitForElement(
    () => getByText(movieTitle)
  )
  expect(otherMovie).toBeInTheDocument();
  expect(bestMovie).toBeInTheDocument();

  const searchButton = getByText(/search/i);
  const searchInput = getByLabelText('search-input');

  fireEvent.change(searchInput, { target: { value: movieTitle } })

  fireEvent.click(searchButton);

  await waitForElementToBeRemoved(() => queryByText(otherMovieTitle))
  // const singleMovieOnScreen = await waitForElement(
  //     () => getByText(movieTitle)
  // )
  expect(bestMovie).toBeInTheDocument();
})