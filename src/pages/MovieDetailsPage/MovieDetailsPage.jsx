import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../app';
import BackButton from '../../components/BackButton/BackButton';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieDetails(movieId)
      .then(setMovie)
      .then(() => setIsLoading(false));
  }, [movieId]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return movie ? (
    <div>
      <BackButton />
      <div className={styles.divMovies}>
        <img
          className={styles.imgMovie}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <h1>{movie.title}</h1>
        <p>Score:{Math.round(movie.vote_average * 10)}%</p>
        <p className={styles.descriptionMovie}>{movie.overview}</p>
        <ul className={styles.genresList}>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>

      <div className={styles.divLink}>
        <h3 className={styles.divh}>Additional information</h3>
        <ul className={styles.divList}>
          <li className={styles.divItem}>
            <Link className={styles.link} to={`cast`}>
              Cast
            </Link>
          </li>
          <li className={styles.divItem}>
            <Link className={styles.link} to={`reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  ) : (
    <p>Not found</p>
  );
}

export default MovieDetailsPage;
