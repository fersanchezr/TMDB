const S = require("sequelize");
const db = require("../config/index");

class Movie extends S.Model {}

Movie.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    actors: {
      type: S.STRING,
      allowNull: false,
    },
    gender: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;
