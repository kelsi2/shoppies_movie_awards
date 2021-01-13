import noImage from '../images/noImage.png';

export default function Nominations(props) {
  // Instructions to display if no nominations
  if (props.movies.length <= 0) {
    return (
      <>
        <h3 className="instructions">Nominate up to 5 of your favorite movies for the Shoppies!</h3>
        <h4 className="instructions">Get started by searching for a movie title.</h4>
      </>
    )
  }

  return (
    props.movies.map((movie) => (
      <>
        <section className="movie-results" key={movie.imdbID}>
        <div className="img-container">
          {/* Use placeholder image if no poster available */}
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
              <button className="btn" onClick={() => props.handleRemoveClick(movie)}>Remove nomination <i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </section>
      </>
  )))
}