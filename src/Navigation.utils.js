import {createContext, useReducer} from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const initialState = {
    DisplayedComponent: MovieList,
    componentName: 'MovieList',
    selectedMovie: undefined
}

export const NavigationContext = createContext(initialState);

export const useNavigation = () => {

    const [navigationState, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'MovieDetails':
                return { DisplayedComponent: MovieDetails, componentName: 'MovieDetails', selectedMovie: action.payload};
            // case 'User':
            //     return { DisplayedComponent: 'User' };
            default:
                return initialState;
        }
    }, initialState);

    return {navigationState, dispatch}
}
