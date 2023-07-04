const express = require("express");
const multer = require("multer");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const allowCorsHandler = (req, res, next) => {
  const whitelist = ['https://ide-front.vercel.app', 'https://stage-dun.vercel.app'];
  const origin = req.headers.referer;
  console.log(origin)
  if (whitelist.includes(origin)) {
    console.log("salut")
    res.setHeader('Access-Control-Allow-Origin', origin.slice(0,-1));
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
  } else {
    return res.status(403).json({ error: "Ahah" });
  }

  next();
};
app.use(allowCorsHandler);
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('basetest2', 'maquereau', process.env.PASSWORD, {
  host: process.env.LINK,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  dialectModule: require('mysql2'),
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
});
// CRUD traitement
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/traitement/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.traitement.create({ id_patient:req.body.id_patient, medicament: req.body.medicament ,dose_midi: req.body.dose_midi ,dose_soir: req.body.dose_soir ,dose_matin: req.body.dose_matin ,date_debut: req.body.date_debut ,date_fin: req.body.date_fin})
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
    await models.traitement.update({ id_patient:req.body.id_patient, medicament: req.body.medicament ,dose_midi: req.body.dose_midi ,dose_soir: req.body.dose_soir ,dose_matin: req.body.dose_matin,date_debut: req.body.date_debut ,date_fin: req.body.date_fin },
      {
        where: {
          id: req.body.id
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

// CRUD photos

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      callback(null, '../front/myapp/public/img');
  },
  filename: (req, file, callback) => {
      callback(null,file.originalname);
  }
});

app.use(multer({ storage: storage }).single('myFile'));
app.post('/photos/upload', function (req, res) {
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/photos/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.photos.create({ id_patient:req.body.id_patient, type: req.body.type ,image: req.body.image ,groupe: req.body.groupe})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/photos/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.photos.findAll({});
    res.send(body)
  })();
});

app.post("/photos/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.photos.update({ id_patient:req.body.id_patient, type: req.body.type ,image: req.body.image ,groupe: req.body.groupe },
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/photos/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.photos.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

//CRUD plaies
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/plaies/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.plaies.create({ id_patient:req.body.id_patient, text: req.body.text ,groupe: req.body.groupe,type: req.body.type})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/plaies/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.plaies.findAll({});
    res.send(body)
  })();
});

app.post("/plaies/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.plaies.update({ id_patient:req.body.id_patient, text: req.body.text ,groupe: req.body.groupe ,type: req.body.type},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/plaies/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.plaies.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
//CRUD bilan
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/bilan/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bilan.create({ id_patient:req.body.id_patient, text: req.body.text ,weekly: req.body.weekly,date: req.body.date,groupe: req.body.groupe ,shift: req.body.shift,date_debut: req.body.date_debut ,date_fin: req.body.date_fin})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/bilan/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.bilan.findAll({});
    res.send(body)
  })();
});

app.post("/bilan/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bilan.update({ id_patient:req.body.id_patient, text: req.body.text ,weekly: req.body.weekly,date: req.body.date,groupe: req.body.groupe ,shift: req.body.shift,date_debut: req.body.date_debut ,date_fin: req.body.date_fin},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/bilan/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bilan.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
//CRUD rdv
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/rdv/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.rdv.create({ id_patient:req.body.id_patient, text: req.body.text ,date: req.body.date ,type: req.body.type })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/rdv/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.rdv.findAll({});
    res.send(body)
  })();
});

app.post("/rdv/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.rdv.update({ id_patient:req.body.id_patient, text: req.body.text ,date: req.body.date ,type: req.body.type},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/rdv/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.rdv.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
//Login
app.get("/user/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.compte.findAll({});
    res.send(body)
  })();
});