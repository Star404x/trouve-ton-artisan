const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },

    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    about: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },

    specialite_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "specialites",
        key: "id",
      },
    },

    top_artisan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "artisans",
    timestamps: false,
  },
);

module.exports = Artisan;
