const fn = function () {
  console.log('Fuction Working');
};
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).send('İndex page');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunucu port ${PORT} da çalışmaya başladı`);
});
