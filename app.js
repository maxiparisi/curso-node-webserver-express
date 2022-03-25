const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public')); //sirve en la url raiz(ya que no se especificó) el contenido de la carpeta public y por defecto va al index.html

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
  res.render('generic', {
    nombre: 'Maxi',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Maxi',
    titulo: 'Curso de Node'
  })
})

app.get('*', (req, res) => {
  res.send('404 | Pagina no encontrada')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})