function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control my-4"
      placeholder="Search Movie..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;