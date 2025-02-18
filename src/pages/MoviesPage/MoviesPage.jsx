import { useState, useEffect } from 'react';
import { searchMovies } from '../../app';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState(query);

  useEffect(() => {
    updateSearchParams('q', submittedQuery);
    if (!submittedQuery) return;

    let isCancelled = false;
    setIsLoading(true);

    searchMovies(submittedQuery)
      .then(data => {
        if (!isCancelled) setMovies(data);
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [submittedQuery]);

  const handleSearch = e => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="moviesInput"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="moviesButton" type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} isLoading={isLoading} />
    </>
  );
};
export default MoviesPage;
