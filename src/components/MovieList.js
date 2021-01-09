import {useState} from 'react';

export default function MovieList(props) {
  const [nominated, setNominated] = useState([]);

  const addNomination = (movie) => {
    // Copy new nomination to the array
    const nominationList = [...nominated, movie];

    // Make sure there are 5 or less movies nominated
    setNominated(nominationList);
  }

  return (
    props.results.map((movie) => (
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
        {nominated.length < 5 && !nominated.includes(movie) ?
          <button onClick={() => addNomination(movie)}>Nominate <i className="fas fa-heart"></i></button>
          :
          <button disabled>Nominate <i className="fas fa-heart"></i></button>
        }
      </>
    ))
  )
}