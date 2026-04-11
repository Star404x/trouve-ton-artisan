function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter-block p-3 p-md-4 mb-4">
      <label htmlFor="category" className="form-label fw-semibold">
        Filtrer par catégorie
      </label>

      <select
        id="category"
        className="form-select form-select-lg"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
