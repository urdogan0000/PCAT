const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MİDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/add', function (req, res) {
  res.render('add');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunucu port ${PORT} da çalışmaya başladı`);
});
