const { Category, Specialite } = require("../models");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Specialite,
          required: false, // évite de filtrer les catégories sans spécialités
        },
      ],
      order: [["name", "ASC"]], // optionnel : tri alphabétique
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error(error); // important pour debug
    res.status(500).json({
      message: "Erreur lors de la récupération des catégories.",
    });
  }
};

module.exports = {
  getAllCategories,
};
