const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

const app = express();

mongoose
  .connect(
    'mongodb+srv://ecem:29071995Ecem@cluster0.ef92d.mongodb.net/pcat-db?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Template engine
app.set('view engine', 'ejs');

// MiddleWare
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);

app.get('/photos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
