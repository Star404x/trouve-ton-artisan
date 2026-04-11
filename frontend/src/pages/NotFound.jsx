import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="py-5">
      <div className="not-found-block text-center">
        <span className="section-kicker"></span>
        <h1 className="hero-title mb-3">404</h1>
        <h2 className="section-title mb-3">Page introuvable</h2>
        <p className="hero-text mx-auto mb-4">
          La page que vous recherchez n’existe pas ou n’est plus disponible.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Link to="/" className="btn btn-primary">
            Retour à l’accueil
          </Link>
          <Link to="/artisans" className="btn btn-outline-primary">
            Voir les artisans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
