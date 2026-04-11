import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = searchTerm.trim();

    if (trimmedValue) {
      navigate(`/artisans?search=${encodeURIComponent(trimmedValue)}`);
    } else {
      navigate("/artisans");
    }

    setSearchTerm("");
  };

  return (
    <header className="site-header">
      <div className="container py-3 py-lg-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-4">
            <Link to="/" className="d-flex align-items-center gap-3 site-brand">
              <div className="site-brand-logo">A</div>

              <div>
                <div className="brand-title">Trouve ton artisan</div>
                <div className="brand-subtitle">Auvergne-Rhône-Alpes</div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-lg-4">
            <nav className="d-flex flex-wrap justify-content-lg-center gap-3 gap-lg-4">
              <Link to="/" className="nav-link custom-nav-link">
                Accueil
              </Link>
              <Link to="/artisans" className="nav-link custom-nav-link">
                Artisans
              </Link>
            </nav>
          </div>

          <div className="col-12 col-lg-4">
            <form onSubmit={handleSubmit} className="header-search-form">
              <label htmlFor="header-search" className="visually-hidden">
                Rechercher un artisan
              </label>

              <div className="header-search-group">
                <input
                  id="header-search"
                  type="text"
                  className="header-search-input"
                  placeholder="Rechercher"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  type="submit"
                  className="header-search-button"
                  aria-label="Lancer la recherche"
                >
                  🔎
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
