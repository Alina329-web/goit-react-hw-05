// src/components/MovieList/MovieList.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies, isLoading }) => {
  const location = useLocation();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {movies.length > 0 ? (
        <ul className={styles.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <Link
                className={styles.link}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </>
  );
};

export default MovieList;
