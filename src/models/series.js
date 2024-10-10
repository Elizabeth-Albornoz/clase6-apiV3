'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Series.init({
    nombre: DataTypes.STRING,
    plataforma: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Series', //por defecto si el modelo esta en singular
    tableName: 'Series' //la tabla en plural
  });
  return Series;
};