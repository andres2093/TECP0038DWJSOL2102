const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.get('/', function (req, res) {
  res.send('Bienvenido a mi API!!!')
})

app.use('/api', require('./routes'))

app.listen(3000, () => console.log("Corriendo en 3000"))