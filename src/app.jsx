import {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import MoviesList from './components/moviesList';

function App() {
    return (
        <div className="App">
            <h1>Movie List App</h1>
            <MoviesList />
        </div>
    );
}

export default App;