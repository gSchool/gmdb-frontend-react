import React from 'react';
import UserHeader from './UserHeader';
import { render, fireEvent } from '@testing-library/react';

//when login is clicked, the component rendered in the header changes from user login to active user 
test('Clicking "login" changes the header component from a login button to display the logged in users name', () => {
  const {getByText, getByLabelText} = render(<UserHeader />);
  const username = 'Katie';
  const loginButton = getByText(/login/i); 

  const usernameInput = getByLabelText('username-input');  
  fireEvent.change(usernameInput, { target: { value: username} })

  fireEvent.click(loginButton) 

  expect(getByText(`Welcome Katie`)).toBeInTheDocument()
})
