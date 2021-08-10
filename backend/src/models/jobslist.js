'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobslist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jobslist.init({
    jobTitle: DataTypes.STRING,
    jobDescription: DataTypes.STRING,
    date: DataTypes.DATE,
    applicants: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jobslist',
  });
  return Jobslist;
};