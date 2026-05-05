import { useState, useEffect } from 'react'
import { buscarPeli, detallesPeli } from './services/api.js'
import SearchBar from './components/SearchBar.jsx'
import ListaPelicula from './components/MovieList.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import Loader from './components/Loader.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import './app.css'

function App() {
    const [pelicula, setPelis] = useState([])
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)
    const [busquedaDelUsuario, setBusquedaDelUsuario] = useState("")

    function realizarBusqueda(titulo) {
        setBusquedaDelUsuario(titulo)
    }

    useEffect(() => {
        async function buscar() {
            if (busquedaDelUsuario === "") return

            setCargando(true)
            setError(null)
            setPeliculaSeleccionada(null)

            const resultado = await buscarPeli(busquedaDelUsuario)

            if (resultado.Response === "True") {
                setPelis(resultado.Search)
            } else {
                setError(resultado.Error)
                setPelis([])
            }

            setCargando(false)
        }

        buscar()
    }, [busquedaDelUsuario])

    async function seleccion(pelicula) {
        setCargando(true)
        const detalle = await detallesPeli(pelicula.imdbID)
        setPeliculaSeleccionada(detalle)
        setCargando(false)
    }

    function volver() {
        setPeliculaSeleccionada(null)
    }

    return (
        <div>
            <h1>Buscador de Películas</h1>
            <SearchBar onSearch={realizarBusqueda} />

            {cargando && <Loader />}

            {error && <ErrorMessage mensajeError={error} />}

            {peliculaSeleccionada && (
                <MovieDetail pelicula={peliculaSeleccionada} volver={volver} />
            )}

            {!peliculaSeleccionada && !cargando && pelicula.length === 0 && !error && (
                <p>Buscá una película o serie para empezar.</p>
            )}

            {!peliculaSeleccionada && !cargando && pelicula.length > 0 && (
                <ListaPelicula pelicula={pelicula} onSelect={seleccion} />
            )}
        </div>
    )
}

export default App