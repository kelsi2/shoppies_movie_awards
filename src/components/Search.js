import {useEffect, useState} from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import MovieList from './MovieList';

export default function Search() {
  // Set state of search field and search results
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
      // Append search term "t=<movie title>" to API_URL to perform a search
      const API_URL = `http://www.omdbapi.com/?s=${term}&apikey=eb5b6c31`;
      
      const getMovies = async() => {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.Search) {
          setResults(json.Search);
        }
      }
      // // Use axios to retrieve search results from OMDB
      // axios.get(API_URL).then((res) => {
      //   if (res) {
      //     console.log(res.data.Search);
      //     setResults([...res.data.Search])
      //   }
      // }) 
      getMovies(term);
    }, [term]);

  return (
    <>
      <main>
        <Searchbar onSearch={(term) => setTerm(term)} />
        <MovieList results={results} />
      </main>
    </>
  );
}