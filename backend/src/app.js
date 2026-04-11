const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const artisanRoutes = require("./routes/artisan.routes");
const categoryRoutes = require("./routes/category.routes");
const { searchArtisans } = require("./controllers/artisan.controller");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Trop de requêtes, veuillez réessayer plus tard.",
});

app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true,
  }),
);

app.use(morgan("dev"));
app.use(express.json());
app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "API Trouve ton artisan OK" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API OK" });
});

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categoryRoutes);
app.get("/api/search", searchArtisans);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
