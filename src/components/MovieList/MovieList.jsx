// src/components/MovieList/MovieList.jsx
import React from 'react';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.movieItem}>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={styles.moviePoster}
          /> */}
          <Link
            className={styles.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
          {/* <h3>{movie.title}</h3> */}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
