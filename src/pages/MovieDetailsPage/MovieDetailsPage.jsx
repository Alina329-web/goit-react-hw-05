import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate(); // useNavigate замість useHistory
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTFmY2MxMmMyNmE4NDQ5ZWMwNjEzM2IzMDY5MTNmNCIsIm5iZiI6MTczOTYyMzQ1NC4zODgsInN1YiI6IjY3YjA4YzFlZGRiYzY0Y2M5MTM2MjFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8WxW6EbHGYahHI5Pph5F1spQCfIUFGCIEEhoOqMeOQ',
            },
          }
        );

        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.movieDetails}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <p>{movie.overview}</p>
      <button
        onClick={() => navigate(-1)} // Використовуємо navigate для переходу назад
        className={styles.goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default MovieDetailsPage;
