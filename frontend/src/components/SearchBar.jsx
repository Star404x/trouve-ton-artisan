function SearchBar({ searchTerm, onSearchChange, onSearchSubmit }) {
  return (
    <form
      onSubmit={onSearchSubmit}
      className="search-bar-block p-3 p-md-4 mb-4"
    >
      <div className="row g-3 align-items-end">
        <div className="col-12 col-lg-10">
          <label htmlFor="search" className="form-label fw-semibold">
            Rechercher un artisan
          </label>
          <input
            id="search"
            type="text"
            className="form-control form-control-lg"
            placeholder="Nom, ville, spécialité, catégorie..."
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>

        <div className="col-12 col-lg-2">
          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Rechercher
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
