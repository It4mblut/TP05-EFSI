import MovieCard from './MovieCard.jsx'

const ListaPelicula = ({ pelis, onSelect }) => {
  return (
    <div>
      {pelis.map((peli) => (
        <MovieCard key={peli.imdbID} peli={peli} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default ListaPelicula