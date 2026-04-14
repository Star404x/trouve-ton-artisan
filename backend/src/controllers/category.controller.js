const { Category, Specialite } = require("../models");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Specialite,
          required: false, 
        },
      ],
      order: [["name", "ASC"]], 
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error(error); 
    res.status(500).json({
      message: "Erreur lors de la récupération des catégories.",
    });
  }
};

module.exports = {
  getAllCategories,
};
