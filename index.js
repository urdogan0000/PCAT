const express = require('express');
const path = require('path');
const app = express();

//MİDDLEWARES
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunucu port ${PORT} da çalışmaya başladı`);
});
