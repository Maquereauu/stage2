var DataTypes = require("sequelize").DataTypes;
var _patient = require("./patient");
var _traitement = require("./traitement");

function initModels(sequelize) {
  var patient = _patient(sequelize, DataTypes);
  var traitement = _traitement(sequelize, DataTypes);


  return {
    patient,
    traitement,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
