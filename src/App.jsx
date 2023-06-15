import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import { BsSearch } from "react-icons/bs";

// 18e7edc1

const API_URL = 'https://www.omdbapi.com?apikey=18e7edc1'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, []);

 
  

  return (
    <>
      <div className='app'>
        <h1>MovieMania</h1>

        <div className="search">
          <input 
            type="text"
            placeholder='Search movies...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          
          <BsSearch
            className="searchIcon"
            alt="search"
            onClick={() => searchMovies(search)}
          />
        </div>

        {
          movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie, index) => (
                <Movie dummyMovie={movie} key={index} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>Ooops... No movies found!!</h2>
            </div>
          )
        }
      </div>  
    </>

  )
}

export default App
