import React, {useEffect, useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import axios from 'axios';
import {BASE} from './constants.js'

function App() {

  const [responseStatus, setResponseStatus] = useState(200)

  useEffect(() => {
    axios.get(BASE)
      .then(response => {
         console.log(response)
      })
      .catch(response => {
        setResponseStatus(response.status)
      })
    }, [])
    
    return responseStatus === 200 ? <MovieList /> : <p>Whoops, something went wrong</p>;
}

export default App;
