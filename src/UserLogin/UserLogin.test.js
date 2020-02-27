import React from 'react';
import UserLogin from './UserLogin';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { UserContext } from '../User.provider';


test('login button calls the function provided to it when clicked', () => {
    const textToAppear = 'hooray!';
    const textNode = document.createElement('p');
    textNode.innerHTML = textToAppear;
    const addTextToScreen = () => document.body.appendChild(textNode);
    const { getByText } = render((
    <UserContext.Provider value={{ logIn: addTextToScreen }}>
        <UserLogin />
    </UserContext.Provider>
    ));
    const loginButton = getByText(/login/i);
    fireEvent.click(loginButton);

   expect(getByText(textToAppear)).toBeInTheDocument();
})

test('upon typing into the username field, I see my username displayed in the box', () => {
    const { getByText, getByLabelText } = render((
        <UserContext.Provider value={{ logIn: () => {} }}>
            <UserLogin />
        </UserContext.Provider>
    ));
    const usernameInputText = "jumanji";
    const usernameInput = getByLabelText('username-input');

    fireEvent.change(usernameInput, { target: { value: usernameInputText } })
    expect(getByLabelText('username-input').value).toBe(usernameInputText)
})