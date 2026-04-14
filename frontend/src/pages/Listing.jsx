import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Listing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [artisans, setArtisans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "",
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCategories = async () => {
  try {
    const response = await api.get("/categories");
    console.log("CATEGORIES DATA:", response.data);
    setCategories(response.data);
  } catch (err) {
    console.error(err);
  }
};

  const fetchArtisans = async (category = "") => {
  try {
    setLoading(true);
    setError("");

    const url = category
      ? `/artisans?category=${encodeURIComponent(category)}`
      : "/artisans";

    const response = await api.get(url);
    console.log("ARTISANS DATA:", response.data);
    setArtisans(response.data);
  } catch (err) {
    console.error(err);
    setError("Impossible de charger les artisans.");
  } finally {
    setLoading(false);
  }
};

  const fetchSearchResults = async (term, category = "") => {
  try {
    setLoading(true);
    setError("");

    const response = await api.get(
      `/artisans/search?q=${encodeURIComponent(term)}`,
    );
    console.log("SEARCH DATA:", response.data);
    let results = response.data;

    if (category) {
      results = results.filter(
        (artisan) => artisan.Specialite?.Category?.name === category,
      );
    }

    setArtisans(results);
  } catch (err) {
    console.error(err);
    setError("Impossible d'effectuer la recherche.");
  } finally {
    setLoading(false);
  }
};

  const updateUrlParams = (searchValue, categoryValue) => {
    const params = {};

    if (searchValue.trim()) {
      params.search = searchValue.trim();
    }

    if (categoryValue) {
      params.category = categoryValue;
    }

    setSearchParams(params);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    updateUrlParams(searchTerm, selectedCategory);

    if (!searchTerm.trim()) {
      fetchArtisans(selectedCategory);
      return;
    }

    fetchSearchResults(searchTerm, selectedCategory);
  };

  const handleCategoryChange = async (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    updateUrlParams(searchTerm, value);

    if (searchTerm.trim()) {
      fetchSearchResults(searchTerm, value);
    } else {
      fetchArtisans(value);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const searchFromUrl = searchParams.get("search") || "";
    const categoryFromUrl = searchParams.get("category") || "";

    setSearchTerm(searchFromUrl);
    setSelectedCategory(categoryFromUrl);

    if (searchFromUrl.trim()) {
      fetchSearchResults(searchFromUrl, categoryFromUrl);
    } else {
      fetchArtisans(categoryFromUrl);
    }
  }, [searchParams]);

  return (
    <section className="py-4 py-lg-5">
      <div className="mb-4">
        <span className="section-kicker"></span>
        <h1 className="hero-title mb-3">Trouver un artisan</h1>
        <p className="hero-text mb-0">
          Recherchez un professionnel par nom, ville, spécialité ou catégorie,
          puis consultez sa fiche détaillée.
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>

        <div className="col-12 col-lg-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      {loading && <p>Chargement des artisans...</p>}

      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && artisans.length === 0 && (
        <div className="empty-state-block p-4">
          <p className="mb-0">Aucun artisan ne correspond à votre recherche.</p>
        </div>
      )}

      {!loading && !error && artisans.length > 0 && (
        <div className="row g-4">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Listing;
