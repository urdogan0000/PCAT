const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs=require('fs')
const Photo = require('./Collections/Photos/photo');
const photoControllers  = require('../Controllers/photoControllers');
//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//db connection
mongoose.connect(
  'mongodb+srv://user:asd123@cluster0.yuseg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

//MİDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

//ROUTES
app.get('/', photoControllers.getAllPhotos);

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/add', function (req, res) {
  res.render('add');
});

app.post('/photos', photoControllers.createPhoto);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunucu port ${PORT} da çalışmaya başladı`);
});
