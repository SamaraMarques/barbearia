const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const models = require('./app/models');

app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

 const Horario = require('./app/controllers/Horario');

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/produtos', async (req, res) => {
  res.render('produtos');
});

app.get('/agendar', async (req, res) => {
  res.render('agendar');
});

app.post('/agendar', async (req, res) => {
  const horario = await Horario.criar(req.body);

  if (horario.error) {
    res.render('erro');
  }

  res.render('sucesso');
});

app.get('/admin', async (req, res) => {
  const horarios = await Horario.index();

  res.render('horarios', {
    horarios
  });
});

app.get('/deletar/:id', async (req, res) => {
  const { id } = req.params;

  await Horario.deletar(id);

  res.redirect('/admin');
});


module.exports = app;
