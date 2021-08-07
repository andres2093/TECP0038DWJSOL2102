// const http = require('http')

// let server = http.createServer(function(req, res) {
//   res.end("Hola mundo!!!")
// })

// server.listen(3000, function() {
//   console.log('Servidor corriendo!!!');
// })

const path = require('path')
// const server1 = path.join('app', 'server.js')
// const server2 = path.join(__dirname, 'app', 'server.js')

// console.log(server1);
// console.log(server2);
// console.log(__dirname);

const fs = require('fs')

// for (let index = 0; index < 5; index++) {
//   const s =  path.join(__dirname, index.toString() + '.txt');
//   console.log(s);
//   fs.writeFile(s, 'Este es el texto 1', {encoding: 'utf-8'}, (err) => {
//     if(err) throw err;
//     console.log('Archivo creado!!!');
//   })
// }

// Asíncrono
// fs.writeFile(path.join(__dirname, '/ej1.txt'), 'Este es el texto 1', {encoding: 'utf-8'}, (err) => {
//   if(err) throw err;
//   console.log('Archivo creado!!!');
// })

// fs.readFile(path.join(__dirname, '/ej1.txt'), {encoding: 'utf-8'}, (err, data) => {
//   if(err) return console.log(err);
//   console.log('Leer archivo: ', data);
// })

// fs.appendFile(path.join(__dirname, '/ej1.txt'), '\nSegunda linea', {encoding: 'utf-8'}, (err) => {
//   if(err) throw err;
//   console.log('Archivo actualizado!!!');
// })

// Síncrono
fs.writeFileSync(path.join(__dirname, '/ej1.txt'), 'Este es el texto 1', {encoding: 'utf-8'});
console.log('writeFileSync:','Archivo creado!');

data = fs.readFileSync(path.join(__dirname, '/ej1.txt'), {encoding: 'utf-8'})
console.log('readFileSync:', data)

fs.appendFileSync(path.join(__dirname, '/ej1.txt'), '\nEsto es una nueva línea');
console.log('appendFile:','Archivo actualizado!');