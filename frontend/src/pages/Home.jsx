import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const response = await api.get("/artisans/top");
        setTopArtisans(response.data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les artisans du mois.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtisans();
  }, []);

  return (
    <section className="py-4 py-lg-5">
      <div className="mb-5">
        <span className="section-kicker"></span>
        <h1 className="hero-title mb-4">
          Trouvez facilement un artisan de confiance près de chez vous
        </h1>
        <p className="hero-text mb-4">
          Accédez à un annuaire régional clair, moderne et pratique pour trouver
          un professionnel selon votre besoin, votre ville ou votre catégorie.
        </p>
        <Link to="/artisans" className="btn btn-primary btn-lg">
          Découvrir les artisans
        </Link>
      </div>

      <section className="editorial-block mb-5">
        <div className="row g-0 align-items-stretch">
          <div className="col-12 col-lg-7">
            <div className="editorial-image h-100 d-flex align-items-center justify-content-center">
              <div className="text-center px-4">
                <h2 className="fw-bold" style={{ color: "#003b6f" }}>
                  Un service simple, local et accessible
                </h2>
                <p className="mb-0 text-secondary">
                  Recherchez un artisan, comparez les profils, puis contactez le
                  bon professionnel.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="editorial-content">
              <span className="section-kicker"></span>
              <h2 className="section-title">Comment trouver mon artisan ?</h2>

              <div className="d-grid gap-3">
                <div className="info-step">
                  <h3 className="h5 fw-bold">1. Choisissez une catégorie</h3>
                  <p className="mb-0">
                    Alimentation, bâtiment, fabrication ou services.
                  </p>
                </div>

                <div className="info-step">
                  <h3 className="h5 fw-bold">2. Comparez les profils</h3>
                  <p className="mb-0">
                    Consultez la spécialité, la ville, la note et la fiche
                    détaillée.
                  </p>
                </div>

                <div className="info-step">
                  <h3 className="h5 fw-bold">3. Contactez le professionnel</h3>
                  <p className="mb-0">
                    Utilisez les informations de contact pour entrer en
                    relation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <span className="section-kicker"></span>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <h2 className="section-title mb-0">Les artisans du mois</h2>
          <Link to="/artisans" className="btn btn-outline-primary">
            Voir tous les artisans
          </Link>
        </div>

        {loading && <p>Chargement des artisans...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row g-4">
            {topArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default Home;
