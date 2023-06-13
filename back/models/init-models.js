var DataTypes = require("sequelize").DataTypes;
var _bilan = require("./bilan");
var _compte = require("./compte");
var _patient = require("./patient");
var _photos = require("./photos");
var _plaies = require("./plaies");
var _rdv = require("./rdv");
var _traitement = require("./traitement");

function initModels(sequelize) {
  var bilan = _bilan(sequelize, DataTypes);
  var compte = _compte(sequelize, DataTypes);
  var patient = _patient(sequelize, DataTypes);
  var photos = _photos(sequelize, DataTypes);
  var plaies = _plaies(sequelize, DataTypes);
  var rdv = _rdv(sequelize, DataTypes);
  var traitement = _traitement(sequelize, DataTypes);


  return {
    bilan,
    compte,
    patient,
    photos,
    plaies,
    rdv,
    traitement,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
