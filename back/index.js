const express = require("express");
const multer = require("multer");
const { Storage } = require('@google-cloud/storage');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const allowCorsHandler = (req, res, next) => {
  const whitelist = ['https://ide-front.vercel.app', 'https://stage-dun.vercel.app', 'https://vercel.com', 'http://localhost:3000'];
  const origin = req.headers.origin;
  if (whitelist.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  } else {
    return res.status(403).json({ error: 'Non' });
  }
  next();
};
const closeSequelizeConnection = (req, res, next) => {
  res.once('finish', () => {
    if (sequelize.isConnected) {
      sequelize.close()
        .then(() => console.log('Sequelize connection closed.'))
        .catch(error => console.error('Failed to close Sequelize connection:', error));
    }
  });

  next();
};
app.use(allowCorsHandler);
app.use(closeSequelizeConnection);
const port = 4444;
const firebaseConfig = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
};
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sql7630695', 'sql7630695', process.env.PASSWORD, {
  host: process.env.LINK,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  dialectModule: require('mysql2'),
  pool: {
    max: 10,
    min: 0, 
    acquire: 30000, 
    idle: 10000
  }
});
process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    console.log('Sequelize connection pool closed.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to close Sequelize connection pool:', error);
    process.exit(1);
  }
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

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully. Models synchronized.');
    
    // Lancer l'application une fois que les modèles sont synchronisés
    app.listen(port, function () {
      console.log(`App listening on port ${port}!`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

var initModels = require("./models/init-models");
var models = initModels(sequelize);

// CRUD patient
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/patient/insert", jsonParser, (req, res) => {
  (async () => {
    
    await models.patient.create({ nom: req.body.nom , prenom: req.body.prenom, tel: req.body.tel, adresse: req.body.adresse, medecin: req.body.medecin, tel_proche: req.body.tel_proche})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
    
  })();
});

app.get("/patient/list", function (req, res) {
  (async () => {
    
    const body = await models.patient.findAll({});
    res.send(body)
    
  })();
});

app.post("/patient/update", jsonParser, (req, res) => {
  (async () => {
    
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
    
    await models.traitement.create({ id_patient:req.body.id_patient, medicament: req.body.medicament ,dose_midi: req.body.dose_midi ,dose_soir: req.body.dose_soir ,dose_matin: req.body.dose_matin ,date_debut: req.body.date_debut ,date_fin: req.body.date_fin})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/traitement/list", function (req, res) {
  (async () => {
    
    const body = await models.traitement.findAll({});
    res.send(body)
  })();
});

app.post("/traitement/update", jsonParser, (req, res) => {
  (async () => {
    
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
const storage = new Storage({
  credentials: { type: firebaseConfig.type,
    project_id: firebaseConfig.project_id,
    private_key_id: firebaseConfig.private_key_id,
    private_key: firebaseConfig.private_key,
    client_email: firebaseConfig.client_email,
    client_id: firebaseConfig.client_id,
    auth_uri: firebaseConfig.auth_uri,
    token_uri: firebaseConfig.token_uri,
    auth_provider_x509_cert_url: firebaseConfig.auth_provider_x509_cert_url,
    client_x509_cert_url: firebaseConfig.client_x509_cert_url},
  projectId: 'images-3e2d3',
});
const bucket = storage.bucket('images-3e2d3.appspot.com');
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//       callback(null, '../front/myapp/public/img');
//   },
//   filename: (req, file, callback) => {
//       callback(null,file.originalname);
//   }
// });
// app.use(multer({ storage: storage }).single('myFile'));
// app.post('/photos/upload', function (req, res) {
// });
app.post('/photos/upload', upload.single('myFile'), (req, res, next) => {
  if (!req.file) {
    res.status(400).json({ error: 'Aucun fichier trouvé' });
    return;
  }

  const file = bucket.file(req.file.originalname);
  const blobStream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  blobStream.on('error', (error) => {
    console.log(error);
    res.status(500).json({ error: 'Erreur lors de l\'upload du fichier' });
  });

  blobStream.on('finish', () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    res.status(200).json({ imageUrl: publicUrl });
  });

  blobStream.end(req.file.buffer);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/photos/insert", jsonParser, (req, res) => {
  (async () => {
    
    await models.photos.create({ id_patient:req.body.id_patient, type: req.body.type ,image: req.body.image ,groupe: req.body.groupe})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/photos/list", function (req, res) {
  (async () => {
    
    const body = await models.photos.findAll({});
    res.send(body)
  })();
});

app.post("/photos/update", jsonParser, (req, res) => {
  (async () => {
    
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
    
    await models.plaies.create({ id_patient:req.body.id_patient, text: req.body.text ,groupe: req.body.groupe,type: req.body.type})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/plaies/list", function (req, res) {
  (async () => {
    
    const body = await models.plaies.findAll({});
    res.send(body)
  })();
});

app.post("/plaies/update", jsonParser, (req, res) => {
  (async () => {
    
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
    
    await models.bilan.create({ id_patient:req.body.id_patient, text: req.body.text ,weekly: req.body.weekly,date: req.body.date,groupe: req.body.groupe ,shift: req.body.shift,date_debut: req.body.date_debut ,date_fin: req.body.date_fin})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/bilan/list", function (req, res) {
  (async () => {
    
    const body = await models.bilan.findAll({});
    res.send(body)
  })();
});

app.post("/bilan/update", jsonParser, (req, res) => {
  (async () => {
    
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
    
    await models.rdv.create({ id_patient:req.body.id_patient, text: req.body.text ,date: req.body.date ,type: req.body.type })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/rdv/list", function (req, res) {
  (async () => {
    
    const body = await models.rdv.findAll({});
    res.send(body)
  })();
});

app.post("/rdv/update", jsonParser, (req, res) => {
  (async () => {
    
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
    
    const body = await models.compte.findAll({});
    res.send(body)
  })();
});