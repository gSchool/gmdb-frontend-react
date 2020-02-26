import React, {createContext} from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import HomeButton from './HomeButton';
import { NavigationContext } from '../Navigation.utils';


test('home button calls the function provided to it when clicked', () => {
    const textToAppear = 'hooray!';
    const textNode = document.createElement('p');
    textNode.innerHTML = textToAppear;
    const addTextToScreen = () => document.body.appendChild(textNode);
    const { getByText } = render((
    <NavigationContext.Provider value={{ dispatch: addTextToScreen }}>
        <HomeButton />
    </NavigationContext.Provider>
    ));
    const homeButton = getByText(/back to home/i);
    fireEvent.click(homeButton);

   expect(getByText(textToAppear)).toBeInTheDocument();
})


//shows up on user profile page when the user profile page is rendered