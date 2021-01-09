export default function MovieList(props) {
  return (
    props.results.map((movie) => (
      <>
        <div className="img_container">
          <img src={movie.Poster} alt="Movie poster" />
        </div>
        <section className="movie_info">
          <h2>{movie.Title}</h2>
          <h6>{movie.Year}</h6>
        </section>
    </>
      ))
  )
}