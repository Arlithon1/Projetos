import {useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: '33bbe824b4f390224fb92dcc55b00ea8',
          language: 'pt-BR',
          page: 1,
        }
      });

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }

  LoadMovies();
  }, []);

  if(loading) {
    return (
      <div className="loading">
        <p>Carregando filmes...</p>
      </div>
    );
  }

  return (
      <div className="movies-list">
        {movies.map(movie => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <Link to={`/Movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
  );
}

export default Home;    