import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import ContactForm from "../components/ContactForm";

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await api.get(`/artisans/${id}`);
        setArtisan(response.data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger la fiche artisan.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [id]);

  if (loading) {
    return <p>Chargement de la fiche artisan...</p>;
  }

  if (error || !artisan) {
    return (
      <section className="py-5">
        <div className="empty-state-block p-4">
          <h1 className="h3 mb-3">Artisan introuvable</h1>
          <p className="mb-3">
            La fiche demandée n’existe pas ou n’est pas disponible.
          </p>
          <Link to="/artisans" className="btn btn-primary">
            Retour à la liste
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 py-lg-5">
      <div className="mb-4">
        <span className="section-kicker"></span>
        <h1 className="hero-title mb-3">{artisan.name}</h1>
        <p className="hero-text mb-0">
          Consultez les informations détaillées de cet artisan et contactez-le
          facilement.
        </p>
      </div>

      <div className="detail-hero-block mb-4">
        <div className="row g-0">
          <div className="col-12 col-lg-7">
            <div className="detail-main-content p-4 p-lg-5">
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge-category">
                  {artisan.Specialite?.Category?.name}
                </span>
                <span className="badge-category">
                  {artisan.Specialite?.name}
                </span>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                  <div className="detail-info-card">
                    <p className="detail-label">Ville</p>
                    <p className="detail-value">{artisan.city}</p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="detail-info-card">
                    <p className="detail-label">Note</p>
                    <p className="detail-value">{artisan.note} / 5</p>
                  </div>
                </div>
              </div>

              <div className="detail-description-block">
                <h2 className="section-title mb-3">Présentation</h2>
                <p className="mb-0 detail-description-text">{artisan.about}</p>
              </div>
              <ContactForm artisanName={artisan.name} />
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <aside className="detail-side-panel h-100 p-4 p-lg-5">
              <span className="section-kicker"></span>
              <h2 className="section-title mb-4">Contact</h2>

              <div className="detail-contact-item mb-4">
                <p className="detail-label">Email</p>
                <a href={`mailto:${artisan.email}`} className="detail-link">
                  {artisan.email}
                </a>
              </div>

              <div className="detail-contact-item mb-4">
                <p className="detail-label">Site web</p>
                {artisan.website ? (
                  <a
                    href={artisan.website}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-link"
                    aria-label={`Visiter le site web de ${artisan.name}`}
                  >
                    Visiter le site
                  </a>
                ) : (
                  <p className="mb-0 text-secondary">Aucun site renseigné</p>
                )}
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href={`mailto:${artisan.email}`} className="btn btn-primary">
                  Contacter l’artisan
                </a>

                <Link to="/artisans" className="btn btn-outline-primary">
                  Retour à la liste
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtisanDetail;
