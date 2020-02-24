import {useEffect} from 'react'
import axios from 'axios';
import {BASE} from '../../constants'

const defaultConfig = {headers: [], body: {}, endpoint: "", method: "GET"};

export default function useFetch(config = {}, onData, onError) {
  const {headers, body, endpoint, method} = {...defaultConfig, ...config};
  useEffect(
    () => 
    {axios({method, url: `${BASE}/${endpoint}`, data: body, headers}).then(onData).catch(onError)}
  , [])
}