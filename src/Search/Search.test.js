import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import Search from './Search';

jest.mock('axios');

test('upon typing into the search box, I see my search query displayed in the box', () => {
    const { getByText, getByLabelText } = render(<Search />);

    const searchInputText = "jumanji";
    const searchInput = getByLabelText('search-input');

    const searchButton = getByText(/search/i);
    fireEvent.change(searchInput, { target: { value: searchInputText } })
    expect(getByLabelText('search-input').value).toBe(searchInputText)
})

test('upon clicking "Search" the input search box is cleared of text', () => {
    const { getByText, getByLabelText } = render(<Search />);

    const searchInputText = "some movie title search"; 
    const searchInput = getByLabelText('search-input');

    const searchButton = getByText(/search/i);
    fireEvent.change(searchInput, { target: { value: searchInputText } })
    expect(getByLabelText('search-input').value).toBe(searchInputText)

    fireEvent.click(searchButton);
    expect(getByLabelText('search-input')).toBeEmpty()

})