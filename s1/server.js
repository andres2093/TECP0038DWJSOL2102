// MODULO DE NODE.JS
let os = require('os')

let misCpu = os.cpus()

// console.log(misCpu);

// CREAR PROYECTO CON NPM
// npm init -y
// npm init

// INSTALAR DEPENDENCIA
// npm i [nombre-dependencia]
// npm install [nombre-dependencia]

// MODULO DE NPM
let moment = require('moment')

let now = moment()

// console.log('Hoy es ' + now);

// MODULO PROPIO
let operaciones = require('./operaciones')
operaciones.sumar(5, 7)

// Reto 1
// Agregar funciones (restar, multiplicar y dividir)
operaciones.restar(50, 7)
operaciones.dividir(15, 7)
operaciones.multiplicar(25, 7)

// Ejemplo 2
console.log(operaciones.random(1, 100));

// Reto 2
// Generar lista con 100 números aleatorios
let lista = []
for (let i = 0; i < 100; i++) {
  lista.push(operaciones.random(1, 100))
}
console.log(lista.length);

// Ejemplo 3
let http = require('http')

let server = http.createServer(function(req, res) {
  res.end('Hola mundo!!!')
})

// server.listen(3000, function() {
//   console.log("El servidor esta corriendo en el puerto 3000");
// })

// Reto 3
// https://github.com/beduExpert/B2-Backend-Node-2020/tree/master/Sesion-01/Reto-03