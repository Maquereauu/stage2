var cors = require('cors')
const express = require("express");
const app = express();
app.use(cors())
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ide', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

var initModels = require("./models/init-models");
var models = initModels(sequelize);

// CRUD patient
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/patient/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.create({ nom: req.body.nom , prenom: req.body.prenom, tel: req.body.tel, adresse: req.body.adresse, medecin: req.body.medecin, tel_proche: req.body.tel_proche})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/patient/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.patient.findAll({});
    res.send(body)
  })();
});

app.post("/patient/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.update({ nom: req.body.nom , prenom: req.body.prenom, tel: req.body.tel, adresse: req.body.adresse, medecin: req.body.medecin, tel_proche: req.body.tel_proche},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/patient/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});// CRUD patient
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/patient/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.create({ nom: req.body.nom , prenom: req.body.prenom, tel: req.body.tel, adresse: req.body.adresse, medecin: req.body.medecin, tel_proche: req.body.tel_proche})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/patient/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.patient.findAll({});
    res.send(body)
  })();
});

app.post("/patient/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.update({ nom: req.body.nom , prenom: req.body.prenom, tel: req.body.tel, adresse: req.body.adresse, medecin: req.body.medecin, tel_proche: req.body.tel_proche},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/patient/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.patient.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
// CRUD traitement
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/traitement/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.traitement.create({ id_patient:req.body.id_patient, traitement: req.body.traitement })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/traitement/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.traitement.findAll({});
    res.send(body)
  })();
});

app.post("/traitement/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.traitement.update({ traitement: req.body.traitement },
      {
        where: {
          id_patient: req.body.id_patient
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/traitement/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.traitement.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});