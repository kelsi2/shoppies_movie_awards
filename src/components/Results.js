import Movie from './Movie';

export default function Results(props) {
  // Retrieve search results from Search component
  return props.results.map(movie => {
    return <Movie key={movie.imdbID} {...movie} />
  })
}