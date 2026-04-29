function MovieCard({ peli, onSelect }) {
  return (
    <div onClick={() => onSelect(peli)}>
      <img
        src={peli.Poster !== "N/A" ? peli.Poster : "https://via.placeholder.com/150"}
        alt={peli.Title}
      />
      <h3>{peli.Title}</h3>
      <p>{peli.Year}</p>
      <p>{peli.Type}</p>
    </div>
  )
}

export default MovieCard