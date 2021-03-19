const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/produtos', async (req, res) => {
  res.render('produtos');
});

app.listen(port, (err) => {
  if (err) {
    console.log("Couldn't start Node server");
  } else {
    console.log('Sucessfully started Node server!');
  }
});