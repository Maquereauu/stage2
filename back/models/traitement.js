const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traitement', {
    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traitement: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'traitement',
    timestamps: false,
    indexes: [
      {
        name: "id_patient",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_patient" },
        ]
      },
    ]
  });
};
