import {useEffect, useState} from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Results from './Results';

export default function Search() {
  // Set state of search field and search results
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const getMovies = async() => {
    // Append search term "t=<movie title>" to API_URL to perform a search
    const API_URL = `http://www.omdbapi.com/?s=${term}&apikey=eb5b6c31`;

    const res = await fetch(API_URL);

    if (res) {
      setResults(res.data);
    }
  }

  useEffect(() => {
     getMovies();
    }, []);

  return (
    <>
      <main>
        <Searchbar onSearch={(term) => setTerm(term)} />
        {Response ? <Results results={results} /> : "No nominations yet!"}
      </main>
    </>
  );
}