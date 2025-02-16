import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    if (query.trim() === '') return;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTFmY2MxMmMyNmE4NDQ5ZWMwNjEzM2IzMDY5MTNmNCIsIm5iZiI6MTczOTYyMzQ1NC4zODgsInN1YiI6IjY3YjA4YzFlZGRiYzY0Y2M5MTM2MjFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8WxW6EbHGYahHI5Pph5F1spQCfIUFGCIEEhoOqMeOQ',
        },
      }
    );

    setMovies(response.data.results);
  };

  return (
    <div className={styles.moviesPage}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
