var DataTypes = require("sequelize").DataTypes;
var _patient = require("./patient");
var _photos = require("./photos");
var _plaies = require("./plaies");
var _traitement = require("./traitement");

function initModels(sequelize) {
  var patient = _patient(sequelize, DataTypes);
  var photos = _photos(sequelize, DataTypes);
  var plaies = _plaies(sequelize, DataTypes);
  var traitement = _traitement(sequelize, DataTypes);


  return {
    patient,
    photos,
    plaies,
    traitement,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
