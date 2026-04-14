const express = require("express");
const router = express.Router();

const {
  getAllArtisans,
  getTopArtisans,
  getArtisanById,
  searchArtisans,
} = require("../controllers/artisan.controller");


router.get("/top", getTopArtisans);
router.get("/search", searchArtisans);
router.get("/", getAllArtisans);
router.get("/:id", getArtisanById);

module.exports = router;
