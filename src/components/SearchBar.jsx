import { useState } from "react"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim() === "") return
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar peli o serie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default SearchBar;