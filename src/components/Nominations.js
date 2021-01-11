import noImage from '../images/noImage.png';

export default function Nominations(props) {
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
          <button onClick={() => props.handleRemoveClick(movie)}>Remove nomination <i class="fas fa-trash-alt"></i></button>
        </div>
      </>
  )))
}