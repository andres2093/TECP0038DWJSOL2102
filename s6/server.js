const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/api', require('./routes'))

app.listen(3000, () => {
  console.log("localhost:3000");
})

// doyidet297@fleeebay.com
// doyidet297
// host: mysql-46184-0.cloudclusters.net
// port: 19896
// ip: 181.215.242.81
// user: admin