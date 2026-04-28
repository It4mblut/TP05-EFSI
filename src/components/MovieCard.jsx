function MovieCard({ pelis, onSelect }) {
  return (
    <div onClick={() => onSelect(pelis)}>
      <img
        src={pelis.Poster !== "Poster no encontrado" ? pelis.Poster : "https://via.placeholder.com/150"}
        alt={pelis.Title}
      />
      <h3>{pelis.Title}</h3>
      <p>{pelis.Year}</p>
      <p>{pelis.Type}</p>
    </div>
  )
}

export default MovieCard