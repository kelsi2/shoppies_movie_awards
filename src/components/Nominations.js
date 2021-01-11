export default function Nominations(props) {
  return (
    props.movies.map((movie) => (
      <>
        <section key={movie.imdbID}>
          <div className="img_container">
            <img src={movie.Poster} alt="Movie poster" />
          </div>
          <div className="movie_info">
            <h2>{movie.Title}</h2>
            <h6>{movie.Year}</h6>
          </div>
        </section>
      </>
  )))
}