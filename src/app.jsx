import { useState } from 'react'
import { buscarPeli, detallesPeli } from './services/api.js'
import SearchBar from './components/SearchBar.jsx'
import ListaPelicula from './components/MovieList.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import Loader from './components/Loader.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import './App.css'

function App() {
    const [pelis, setPelis] = useState([])
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    async function realizarBusqueda(titulo) {
        setCargando(true)
        setError(null)
        setPeliculaSeleccionada(null)

        const resultado = await buscarPeli(titulo)

        if (resultado.Response === "True") {
            setPelis(resultado.Search)
        }
        else {
            setError(resultado.Error)
            setPelis([])
        }

        setCargando(false)
    }

    async function seleccion(peli) {
        setCargando(true)
        const detalle = await detallesPeli(peli.imdbID)
        setPeliculaSeleccionada(detalle)
        setCargando(false)
    }

    function volver() {
        setPeliculaSeleccionada(null)
    }

    return (
        <div>
            <h1>Buscador de Películas</h1>
            <SearchBar onSearch={realizarBusqueda } />

            {cargando && <Loader />}

            {error && <ErrorMessage mensajeError={error} />}

            {peliculaSeleccionada && (
                <MovieDetail pelicula={peliculaSeleccionada} volver={volver} />
            )}

            {!peliculaSeleccionada && !cargando && pelis.length === 0 && !error && (
                <p>Buscá una película o serie para empezar.</p>
            )}

            {!peliculaSeleccionada && !cargando && pelis.length > 0 && (
                <ListaPelicula pelis={pelis} onSelect={seleccion} />
            )}
        </div>
    )
}

export default App