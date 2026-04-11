require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à la base de données réussie.");

    await sequelize.sync();
    console.log("Tables synchronisees.");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erreur de connexion à la base de données :", error);
    process.exit(1); // stop l'app si DB KO
  }
};

startServer();
