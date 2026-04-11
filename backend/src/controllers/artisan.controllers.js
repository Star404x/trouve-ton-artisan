const { Op } = require("sequelize");
const { Artisan, Specialite, Category } = require("../models");

const artisanInclude = [
  {
    model: Specialite,
    include: [
      {
        model: Category,
      },
    ],
  },
];

const getAllArtisans = async (req, res) => {
  try {
    const { category } = req.query;

    const options = {
      include: artisanInclude,
      order: [["note", "DESC"]],
    };

    if (category && category.trim()) {
      options.include = [
        {
          model: Specialite,
          include: [
            {
              model: Category,
              where: {
                name: {
                  [Op.like]: `%${category.trim()}%`,
                },
              },
            },
          ],
        },
      ];
    }

    const artisans = await Artisan.findAll(options);

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des artisans." });
  }
};

const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top_artisan: true },
      limit: 3,
      order: [["note", "DESC"]],
      include: artisanInclude,
    });

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur lors de la récupération des artisans du mois.",
    });
  }
};

const getArtisanById = async (req, res) => {
  try {
    const { id } = req.params;

    const artisan = await Artisan.findByPk(id, {
      include: artisanInclude,
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan introuvable." });
    }

    res.status(200).json(artisan);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'artisan." });
  }
};

const searchArtisans = async (req, res) => {
  try {
    const q = req.query.q?.trim();

    if (!q) {
      return res
        .status(400)
        .json({ message: "Le paramètre de recherche q est requis." });
    }

    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          required: false,
          include: [
            {
              model: Category,
              required: false,
            },
          ],
        },
      ],
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${q}%` } },
          { city: { [Op.like]: `%${q}%` } },
          { "$Specialite.name$": { [Op.like]: `%${q}%` } },
          { "$Specialite.Category.name$": { [Op.like]: `%${q}%` } },
        ],
      },
      order: [["note", "DESC"]],
    });

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la recherche des artisans." });
  }
};

module.exports = {
  getAllArtisans,
  getTopArtisans,
  getArtisanById,
  searchArtisans,
};
