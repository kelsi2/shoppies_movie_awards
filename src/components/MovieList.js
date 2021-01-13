import noImage from '../images/noImage.png';

export default function MovieList(props) {
  // If the search field is empty return no results
  if (props.value === '') {
    return (
      []
    )
  }

  return (
    props.movies.map((movie) => (
      <>
        <section className="movie-results" key={movie.imdbID}>
          {/* Use placeholder image if no poster available */}
          <div className="img-container">
          {movie.Poster !== "N/A" ?
              <img src={movie.Poster} alt="Movie poster" />
            :
              <img src={noImage} alt="No movie poster available" />
          }
          </div>
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
          <div>
            {/* Disable nominate button if more 5 nominations or movie already nominated */}
          {props.nominated.length >= 5 || props.nominated.includes(movie) ? 
            <button className="btn" disabled>Nominate</button>
            :
            <button className="btn" onClick={() => props.handleNominationClick(movie)}>Nominate <i className="fas fa-heart"></i></button>
          }
          </div>
        </div>
        </section>
      </>
    ))
  )
}