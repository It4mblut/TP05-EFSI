import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      api.get('/movies')
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
          setLoading(false);
        });
    };

    fetchMovies();
    
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;