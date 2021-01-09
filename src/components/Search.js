import {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import MovieList from './MovieList';

export default function Search(props) {
  // Set state of search field and search results
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  // Loading state for search results, set to false until search is in progress
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      // Append search term "t=<movie title>" to API_URL to perform a search
      const API_URL = `http://www.omdbapi.com/?s=${term}&apikey=eb5b6c31`;
      
      // Request movie data in json form and setResult state
      const getMovies = async() => {
        setLoading(true);
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.Search) {
          setResults(json.Search);
          setLoading(false);
        }
      }

      getMovies(term);
    }, [term]);
    console.log(results)
    console.log(props.nominated)

  return (
    <>
      <main>
        <Searchbar term={term} loading={loading} onSearch={(term) => setTerm(term)} />
        <div className="search_results">
          <MovieList results={results} />
        </div>
        <div className="nominated_movies">
          {props.nominated ? <MovieList results={props.nominated} /> : 'You haven\'t nominated any movies yet! Nominate up to 5 of your favorites for the Shoppies!'}
        </div>
      </main>
    </>
  );
}