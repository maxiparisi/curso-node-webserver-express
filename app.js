const express = require('express')
const app = express()

const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
  })

  app.get('*', (req, res) => {
    res.send('404 | Pagina no encontrada')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })