import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTFmY2MxMmMyNmE4NDQ5ZWMwNjEzM2IzMDY5MTNmNCIsIm5iZiI6MTczOTYyMzQ1NC4zODgsInN1YiI6IjY3YjA4YzFlZGRiYzY0Y2M5MTM2MjFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8WxW6EbHGYahHI5Pph5F1spQCfIUFGCIEEhoOqMeOQ';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export async function fetchTrendingMovies() {
  const response = await axiosInstance.get('/trending/movie/day');
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await axiosInstance.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}
