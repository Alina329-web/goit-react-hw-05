import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTFmY2MxMmMyNmE4NDQ5ZWMwNjEzM2IzMDY5MTNmNCIsIm5iZiI6MTczOTYyMzQ1NC4zODgsInN1YiI6IjY3YjA4YzFlZGRiYzY0Y2M5MTM2MjFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8WxW6EbHGYahHI5Pph5F1spQCfIUFGCIEEhoOqMeOQ',
          },
        }
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
