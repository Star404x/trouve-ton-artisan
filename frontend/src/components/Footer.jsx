function Footer() {
  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-4">
            <h2 className="h3 fw-bold mb-3">Trouve ton artisan</h2>
            <p className="mb-0">
              Plateforme régionale pour trouver facilement un artisan selon
              votre besoin, votre ville et votre catégorie.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="h5 fw-bold mb-3">Navigation</h3>
            <ul className="list-unstyled m-0">
              <li className="mb-2">Accueil</li>
              <li className="mb-2">Liste des artisans</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="h5 fw-bold mb-3">Région</h3>
            <p className="mb-1">Auvergne-Rhône-Alpes</p>
            <p className="mb-1">Projet de mise en relation avec les artisans</p>
            <p className="mb-0">Frontend React · Backend Node.js · MySQL</p>
          </div>
        </div>

        <hr className="border-light opacity-25" />

        <p className="mb-0 text-center">© 2026 Trouve ton artisan</p>
      </div>
    </footer>
  );
}

export default Footer;
