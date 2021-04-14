//teste1
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('Não foi possível iniciar servidor');
  } else {
    console.log('Servidor escutando na porta 3000!');
  }
});
