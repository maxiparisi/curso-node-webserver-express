const express = require('express')
const app = express()

const port = 8080;

app.set('view engine', 'hbs');

app.use( express.static('public')); //sire en la url raiz(ya que no se especificó) el contenido de la carpeta public y por defecto va al index.html

app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Maxi',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req, res) => {
  res.send('404 | Pagina no encontrada')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})