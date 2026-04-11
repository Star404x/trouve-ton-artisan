import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <article className="custom-card">
        <div className="card-body d-flex flex-column">
          <span className="badge-category">
            {artisan.Specialite?.Category?.name}
          </span>

          <h3 className="h4 fw-bold mb-3" style={{ color: "#003b6f" }}>
            {artisan.name}
          </h3>

          <p className="mb-2">
            <strong>Spécialité :</strong> {artisan.Specialite?.name}
          </p>

          <p className="mb-2">
            <strong>Ville :</strong> {artisan.city}
          </p>

          <p className="mb-3">
            <strong>Note :</strong> {artisan.note} / 5
          </p>

          <p className="text-secondary flex-grow-1">
            {artisan.about.length > 120
              ? artisan.about.slice(0, 120) + "..."
              : artisan.about}
          </p>

          <Link
            to={`/artisans/${artisan.id}`}
            className="btn btn-primary mt-3 align-self-start"
            aria-label={`Voir la fiche de ${artisan.name}`}
          >
            Voir la fiche
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ArtisanCard;
