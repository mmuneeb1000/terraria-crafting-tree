import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const q = query.trim();
    if (!q) return;

    navigate(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        className="border p-2 w-full"
      />

      <button type="submit" className="px-4 border">
        Go
      </button>
    </form>
  );
}

export default SearchBar;
