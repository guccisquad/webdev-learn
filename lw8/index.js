const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.use(function (err, req, res, next) {
  if (err){
    res.sendStatus(500);
  }
});

app.listen(process.env.porn || 4000, function () {
  console.log('Server is started');
});
