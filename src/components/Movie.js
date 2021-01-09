export default function Movie(props) {
  return (
    <article className='movie'>
      <img className="movie_poster" src={props.Poster} alt="Movie poster" />
      <div className="movie_info">
        <div className="movie_title">{props.Title}</div>
        <div className="release_year">{props.Year}</div>
      </div>
    </article>
  )
}