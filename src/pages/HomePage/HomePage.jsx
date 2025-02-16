import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../app';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(setMovies)
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
