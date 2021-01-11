import noImage from '../images/noImage.png';

export default function Nominations(props) {
  if (props.movies.length <= 0) {
    return (
      <>
        <h3>Nominate up to 5 of your favorite movies for the Shoppies!</h3>
        <h4>Get started by searching by movie title at the top.</h4>
      </>
    )
  }

  return (
    props.movies.map((movie) => (
      <>
        <section key={movie.imdbID}>
        <div className="img-container">
          {movie.Poster !== "N/A" ?
              <img src={movie.Poster} alt="Movie poster" />
            :
              <img src={noImage} alt="No movie poster available" />
          }
          </div>
          <div className="movie_info">
            <h2>{movie.Title}</h2>
            <h6>{movie.Year}</h6>
          </div>
        </section>
        <div className="btn">
          <button onClick={() => props.handleRemoveClick(movie)}>Remove nomination <i className="fas fa-trash-alt"></i></button>
        </div>
      </>
  )))
}