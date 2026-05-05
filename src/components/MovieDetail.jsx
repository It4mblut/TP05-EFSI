function MovieDetail({ peliculacula, volver }) {
  return (
  <div>
      <button onClick={volver}>← Volver</button>
      <h2>{pelicula.Title}</h2>
      <img src={pelicula.Poster !== "N/A" ? pelicula.Poster : "https://via.placeholder.com/300"} alt={pelicula.Title}/>

      <p><strong>Año:</strong> {pelicula.Year}</p>
      <p><strong>Género:</strong> {pelicula.Genre}</p>
      <p><strong>Director:</strong> {pelicula.Director}</p>
      <p><strong>Actores principales:</strong> {pelicula.Actors}</p>
      <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
      <p><strong>Duración:</strong> {pelicula.Runtime}</p>
      <p><strong>Idioma:</strong> {pelicula.Language}</p>
      <p><strong>País:</strong> {pelicula.Country}</p>

      {pelicula.imdbRating !== "N/A" && (
        <p><strong>Puntaje IMDb:</strong> {pelicula.imdbRating}</p>
      )}
    </div>
  )
}

export default MovieDetail