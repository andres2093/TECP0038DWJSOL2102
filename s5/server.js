const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.get('/', function (req, res) {
  res.send('Bienvenido a mi API!!!')
})

app.use('/api', require('./routes'))

app.listen(3000, () => console.log("Corriendo en 3000"))

// Crear modulo comentarios
// id de comentario     1
// id de la nota        1
// Comentario           Primer comentario
// Nombre autor         Andres

// ligefin708@hax55.com
// host: mysql-44756-0.cloudclusters.net
// port: 19779
// ipAddress: 181.215.242.77
// user: bedu2021
// pass: bedu2021ligefin