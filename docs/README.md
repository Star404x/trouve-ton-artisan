# 🛠️ Trouve ton artisan

Application web permettant de rechercher facilement un artisan en Auvergne-Rhône-Alpes selon plusieurs critères : nom, ville, spécialité ou catégorie.

---

## 🚀 Démo en ligne

- 🌐 Frontend : https://trouve-ton-artisan-beryl-zeta.vercel.app
- 🔌 API Backend : https://trouve-ton-artisan-mnyi.onrender.com

---

## ✨ Fonctionnalités

- 🔍 Recherche d’artisans (nom, ville, spécialité, catégorie)
- 🏷️ Filtre par catégorie
- 🧑‍🔧 Liste des artisans
- ⭐ Mise en avant des artisans du mois
- 📄 Fiche détail artisan
- ✉️ Formulaire de contact
- ❌ Page 404 personnalisée
- 📱 Responsive (mobile / tablette / desktop)
- ♿ Accessibilité de base (labels, focus, navigation)

---

## 🧱 Stack technique

### Frontend

- React
- React Router
- Vite
- Bootstrap
- Sass
- Axios

### Backend

- Node.js
- Express
- Sequelize
- MySQL

---

## 🔐 Sécurité

- Helmet (sécurisation HTTP)
- CORS configuré
- Rate limiting (anti-spam API)
- Validation des données
- Gestion centralisée des erreurs
- Variables d’environnement

---

## 📁 Structure du projet

trouve-ton-artisan/
├── frontend/
├── backend/
└── docs/

---

## ⚙️ Installation en local

### 1. Cloner le projet

git clone https://github.com/ton-username/trouve-ton-artisan.git
cd trouve-ton-artisan

---

### 2. Installer les dépendances

Frontend :
cd frontend
npm install

Backend :
cd ../backend
npm install

---

## 🔑 Variables d’environnement

### Frontend (.env)

VITE_API_URL=http://localhost:3000/api

---

### Backend (.env)

PORT=3000
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_DIALECT=mysql

---

## 🗄️ Base de données

Un script SQL est disponible dans :

docs/schema.sql

Il permet de :

- créer les tables
- insérer les données
- initialiser le projet

---

## ▶️ Lancer le projet

### Backend

cd backend
npm run dev

---

### Frontend

cd frontend
npm run dev

---

## 🔌 API disponible

- GET /api/artisans
- GET /api/artisans/top
- GET /api/artisans/:id
- GET /api/categories
- GET /api/search?q=
- GET /api/health

---

## 🌍 Déploiement

### Frontend

Déployé sur Vercel

### Backend

Déployé sur Render

---

## 📌 Points forts du projet

- Architecture frontend / backend séparée
- API REST connectée à une base MySQL
- Interface moderne inspirée d’un site institutionnel
- Responsive design
- Bonne organisation du code
- Sécurité backend implémentée

---

## 👨‍💻 Auteur

Projet réalisé par **Popa Veaceslav**
