import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios')

test('renders MovieList when there are no movies', () => {
  axiosMock.get.mockResolvedValueOnce({
    data: []
  })
  const { getByText } = render(<App />);
  const movieListTitle = getByText(/Movies/i);
  expect(movieListTitle).toBeInTheDocument();
});

test('network call to get movie data fails', async () => {
  axiosMock.get.mockRejectedValueOnce({
    error: "idk",
    status: 500
  })
  const { getByText } = render(<App />); 
  
  
  const errorMessage = await waitForElement(
    () => getByText(/Whoops, something went wrong/i)
  )
  expect(errorMessage).toBeInTheDocument();
})