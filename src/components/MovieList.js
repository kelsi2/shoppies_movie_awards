import noImage from '../images/noImage.png';

export default function MovieList(props) {
  if (props.value === '') {
    return (
      []
    )
  }

  return (
    props.movies.map((movie) => (
      <>
        <section className="movie-results" key={movie.imdbID}>
          <div className="img-container">
          {movie.Poster !== "N/A" ?
              <img src={movie.Poster} alt="Movie poster" />
            :
              <img src={noImage} alt="No movie poster available" />
          }
          </div>
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <h6>{movie.Year}</h6>
          </div>
        </section>
        <div className="btn">
        {props.nominated.length >= 5 || props.nominated.includes(movie) ? 
          <button disabled>Nominate <i className="fas fa-heart"></i></button>
          :
          <button onClick={() => props.handleNominationClick(movie)}>Nominate <i className="fas fa-heart"></i></button>
        }
        </div>
      </>
    ))
  )
}