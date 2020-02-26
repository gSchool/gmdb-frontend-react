import React, {useContext} from 'react';
import './HomeButton.css';
import { NavigationContext } from '../Navigation.utils';

function HomeButton() {
    const {dispatch} = useContext(NavigationContext)
    function navigateHome() {
        dispatch({ type: 'MovieList' })
    }
    return <>
        <button onClick={navigateHome}>Back to Home</button>
    </>;
}

export default HomeButton;
