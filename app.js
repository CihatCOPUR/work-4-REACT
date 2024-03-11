const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.render('index');
})
app.get('/add', (req, res) => {
  res.render('add');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.post('/photos', (req, res) => {

  console.log(req.body);
  res.redirect('/');
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı`);
})