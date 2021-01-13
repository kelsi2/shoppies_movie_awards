import {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import MovieList from './MovieList';
import Nominations from './Nominations';
import MaxNominations from './Banner';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Search(props) {
  // Set state of search field and search results
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  // Loading state for search results, set to false until search is in progress
  const [loading, setLoading] = useState(false);
  const [nominated, setNominated] = useState([]);
  // Start with empty search value
  const [value, setValue] = useState('');

  // Notify when nominations have been made successfully or nomination has been removed
  const nominationToast = () => {
    toast.info('Nomination successful!');
  }

  const removedToast = () => {
    toast.error('Nomination removed.');
  }
  
  useEffect(() => {
    // Append search term "s=<movie title>" to API_URL to perform a search
    const API_URL = `https://www.omdbapi.com/?s=${term}&type=movie&apikey=eb5b6c31`;

    // Request movie data in json form and setResult state
    const getMovies = async() => {
      setLoading(true);
      const res = await fetch(API_URL);
      const json = await res.json();
      
      if (json.Search) {
        setMovies(json.Search);
        setLoading(false);
      }
    }
    
    getMovies(term);
  }, [term]);
  
  const addNomination = (movie) => {
    // Copy new nomination to the array and notify with success toast
    const nominationList = [...nominated, movie];
    if (nominated.length <= 5 && !nominated.includes(movie)) {
      setNominated(nominationList);
      nominationToast();
    }
  }

  const removeNomination = (movie) => {
    // Filter removed nomination from list and notify with danger toast
    const newNominationList = nominated.filter((nomination) => 
      nomination.imdbID !== movie.imdbID
    );
    setNominated(newNominationList);
    removedToast();
  }

  return (
    <>
      <main>
        <Searchbar 
          value={value} 
          setValue={setValue} 
          term={term} 
          loading={loading} 
          onSearch={(term) => setTerm(term)} 
        />
        <MaxNominations nominated={nominated} />
        <section className="movie-content">
          <div className="search-results">
            <h1 className="section-header">
              {
              value.length > 0 ? 
              `Results for "${value}"` 
              : 
              `Enter a movie title to search`
              }
            </h1>
            <MovieList 
              movies={movies} 
              handleNominationClick={addNomination} 
              nominated={nominated} 
              value={value} 
            />
          </div>
          <div className="nomination-results">
            <h1 className="section-header">Nominations</h1>
            <Nominations 
              movies={nominated}
              handleRemoveClick={removeNomination} 
            />
          </div>
        </section>
      </main>
    </>
  );
}