function MovieDetail({ peli, volver }) {
  return (
  <div>
      <button onClick={volver}>← Volver</button>
      <h2>{peli.Title}</h2>
      <img src={peli.Poster !== "N/A" ? peli.Poster : "https://via.placeholder.com/300"} alt={peli.Title}/>

      <p><strong>Año:</strong> {peli.Year}</p>
      <p><strong>Género:</strong> {peli.Genre}</p>
      <p><strong>Director:</strong> {peli.Director}</p>
      <p><strong>Actores principales:</strong> {peli.Actors}</p>
      <p><strong>Sinopsis:</strong> {peli.Plot}</p>
      <p><strong>Duración:</strong> {peli.Runtime}</p>
      <p><strong>Idioma:</strong> {peli.Language}</p>
      <p><strong>País:</strong> {peli.Country}</p>

      {peli.imdbRating !== "N/A" && (
        <p><strong>Puntaje IMDb:</strong> {peli.imdbRating}</p>
      )}
    </div>
  )
}

export default MovieDetail