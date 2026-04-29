import {useState} from 'react';
import './App.css';
import ListaPelicula from './movieList.jsx';

function App() {
    return (
        <div className="App">
            <h1>Movie List App</h1>
            <ListaPelicula />
        </div>
    );
}

export default App;