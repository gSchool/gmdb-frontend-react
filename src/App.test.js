import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent, cleanup } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios')

//TODO: figure out how to use act function to get rid of warning

test('renders MovieList when there are no movies', async () => {
  axiosMock.mockResolvedValueOnce({
    data: []
  });
  const { getByTestId } = render(<App />);
  const movieListTitle = await waitForElement(() => getByTestId('movie-header'));
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
      "movieId": 2832,
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
        "movieId": 676,
        "title": otherMovieTitle
      },
      {
        "movieId": 97186,
        "title": movieTitle
      }]
  })

  axiosMock.mockResolvedValueOnce({
    data: [{
      "movieId": 455,
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

  await waitForElementToBeRemoved(() => {
    expect(bestMovie).toBeInTheDocument();
    return queryByText(otherMovieTitle)
  })
  // const singleMovieOnScreen = await waitForElement(
  //     () => getByText(movieTitle)
  // )
})

test('clicking on Indiana Jones in the movie list navigates to the movie details page', async () => {
  const movie = {
    movieId: 999,
    imdbRating: "8.3",
    imdbVotes: "1,104",
    runtime: "151 min",
    language: "English",
    rated: "PG",
    production: "20th Century Fox",
    released: "21 Sep 1973",
    imdbid: "tt00589759",
    plot: "Indiana raids the temple",
    director: "George Lucas",
    title: "Indiana Jones and the Temple of Doom",
    actors: "Harrison Ford, Matthew McConnoughey, Peter Dinklage",
    awards: "Won 16 Oscars. Another 5 wins.",
    year: "1973",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    genre: "Action, Adventure, Fantasy",
    writer: "George Lucas"
  }

  axiosMock.mockResolvedValueOnce({
    data: [movie]
  })

  const { getByText, getByTestId } = render(<App />);  

  const singleMovieOnScreen = await waitForElement(
    () => getByText(movie.title)
  )
  expect(singleMovieOnScreen).toBeInTheDocument();

  fireEvent.click(singleMovieOnScreen);
  
  expect(getByTestId(`imdbVotes-${movie.movieId}`)).toBeInTheDocument();

})


//"home button" navigates back to movielist/home when clicked
