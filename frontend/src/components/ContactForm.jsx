import { useState } from "react";

function ContactForm({ artisanName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est obligatoire.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(`Votre message pour ${artisanName} a bien été préparé.`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="contact-form-block mt-4">
      <span className="section-kicker"></span>
      <h2 className="section-title mb-4">Envoyer un message</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="contact-name" className="form-label fw-semibold">
            Votre nom
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contact-email" className="form-label fw-semibold">
            Votre email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="contact-message" className="form-label fw-semibold">
            Votre message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin"
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>

        {successMessage && (
          <div className="alert alert-success mt-3 mb-0" role="alert">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
