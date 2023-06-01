var cors = require('cors')
const express = require("express");
const multer = require("multer");
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
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, '../front/myapp/public/img')
//   },
//   filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: '10000000' },
//   fileFilter: (req, file, cb) => {
//       const fileTypes = /jpeg|jpg|png|gif/
//       const mimeType = fileTypes.test(file.mimetype)  
//       const extname = fileTypes.test(path.extname(file.originalname))

//       if(mimeType && extname) {
//           return cb(null, true)
//       }
//       cb('Give proper files formate to upload')
//   }
// }).single('image')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      console.log(req);
      callback(null, '../front/myapp/public/img');
  },
  filename: (req, file, callback) => {
      console.log(req);
      callback(null,file.originalname);
  }
});

app.use(multer({ storage: storage }).single('myFile'));
app.post('/photos/upload', function (req, res) {
  console.log(req.file, req.body)
  console.log("test")
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/photos/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.photos.create({ id_patient:req.body.id_patient, type: req.body.type ,image: req.body.image})
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
    await models.photos.update({ id_patient:req.body.id_patient, type: req.body.type ,image: req.body.image },
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