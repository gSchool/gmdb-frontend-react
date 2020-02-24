import {useState, useEffect} from 'react';
import useFetch from './lib/network/fetch';

export function useMoviesFromDatabase() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const setMoviesAndResetError = ({data}) => {setMovies(data); setError(undefined); }

  useFetch({}, setMoviesAndResetError, setError)

  return [{movies, error}, () => {}]
}