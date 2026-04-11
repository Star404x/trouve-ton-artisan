const sequelize = require("../config/database");

const Category = require("./category.model");
const Specialite = require("./specialite.model");
const Artisan = require("./artisan.model");

Category.hasMany(Specialite, {
  foreignKey: "category_id",
});

Specialite.belongsTo(Category, {
  foreignKey: "category_id",
});

Specialite.hasMany(Artisan, {
  foreignKey: "specialite_id",
});

Artisan.belongsTo(Specialite, {
  foreignKey: "specialite_id",
});

module.exports = {
  sequelize,
  Category,
  Specialite,
  Artisan,
};
