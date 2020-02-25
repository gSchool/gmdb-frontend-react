import {useState} from 'react';
import useFetch from './lib/network/fetch';

export function useMoviesFromDatabase(searchQuery = "") {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const setMoviesAndResetError = ({ data }) => { setMovies(data); setError(null); }

  const endpoint = searchQuery !== "" ? `?search=${searchQuery}` : '';
  useFetch({endpoint: endpoint}, setMoviesAndResetError, setError)

  return {movies, setMovies, error, setError}
}