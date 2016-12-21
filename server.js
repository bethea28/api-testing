const express = require('express');
const app = express();
const User = require('./models/user-model');
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/users', (req, res) => {
  User.findAll()
  .then((data) => {
    res.send(data);
  })
});

app.get('/users/id/:id', (req, res) => {
  User.findOne({
  	where:{
  		username: req.params.id
  	}

  })
  .then((data) => {
    res.send(data);
  })
});

app.post('/users', (req, res) => {
  User.create({
  	username: 'nick',
  	email: 'nick@gmail',
  	password: 'javaninja'
  	

 })
  .then((data) => {
    res.send(data);
  })
});


module.exports = app;
