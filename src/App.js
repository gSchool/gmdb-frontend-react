import React, {useState, useContext} from 'react';
import './App.css';
import {NavigationContext, useNavigation} from './Navigation.utils';
import HomeButton from './HomeButton';
import Search from './Search';
import {useMoviesFromDatabase} from './App.hooks'

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  let { movies, error } = useMoviesFromDatabase(searchQuery);
  const {dispatch, navigationState} = useNavigation();

    let propsToPass
    if(navigationState.componentName === 'MovieList'){
      propsToPass = { movies: movies }
    } else{
      propsToPass = { movie: movies.find(movie => movie.movieId === navigationState.selectedMovie)}
    }

  return (<>
    <Search setSearchQuery={setSearchQuery}/>
    {!error ? (<NavigationContext.Provider value={{ dispatch, navigationState }}>
      <HomeButton/>
      <navigationState.DisplayedComponent {...propsToPass} />
    </NavigationContext.Provider>)
     : <p>Whoops, something went wrong</p>}
  </>);
}

export default App;
