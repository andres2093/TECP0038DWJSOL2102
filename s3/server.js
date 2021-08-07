// CALLBACKS

function saludar(nombre) {
  console.log('Hola', nombre);
}

function entrada(nombre, callback) {
  console.log('Primer función')
  callback(nombre)
}

// entrada('Andres', saludar)

let primera = (call1, call2) => {
  setTimeout(() => {
    console.log("1");
    call1()
    call2()
  }, 3000)
} 

let segunda = () => console.log("2");
let tercera = () => console.log("3");

// primera(segunda, tercera)

// RETO 1
const https = require('https')

function ordernar(res) {
  console.log(res[0].films.length);
  console.log(res[0].name);

  res.sort((a, b) => {
    if (a.films.length > b.films.length) {
      return 1;
    } else if (a.films.length < b.films.length) {
      return -1;
    } else {
      return 0;
    }
  });
  res.sort((a, b) => b.name.localeCompare(a.name))

  console.log(res[0].films.length);
  console.log(res[0].name);
}

function getApi(callback) {
  https.get('https://swapi.dev/api/people/', (res) => {
    let data = ''
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      let body = JSON.parse(data)
      callback(body.results)
    })
  }).on('error', (err) => {
    console.log('Error: ', err);
  })
}

// getApi(ordernar)

// PROMESAS
// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       let numero = Math.random();
//       console.log(numero);
//       if(numero >= 0.5) resolve("Exito");
//       reject("Error");
//   }, 2000);
// })

// promesa
//   .then((data) => console.log("Then: ", data))
//   .catch((error) => console.log("Catch: ", error))

// function evaluarNumero(usuario, contreania) {
//   return new Promise((resolve, reject) => {
//     if(usuario === "Andres" && contreania === 1234) return resolve("Bienvenido!!!");
//     return reject("Credenciales invalidas!!!");
//   })
// }

// evaluarNumero("Andres", 1234)
//   .then((data) => console.log("Then: ", data))
//   .catch((error) => console.log("Catch: ", error))

const fs = require('fs')

// function readFile(path) {
//   return new Promise((resolve, reject) => {
//       fs.readFile(path, "utf-8", (err, data) => {
//           if(err) return reject(err);
//           return resolve(data);
//       })
//   })
// }

// readFile("./ar.txt")
//   .then((data) => console.log("Then: ", data))
//   .catch((error) => console.log("Catch: ", error))

let pr1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "1")
})
let pr2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "2")
})
let pr3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "3")
})

Promise.all([pr1, pr2, pr3])
  .then((data) => console.log("Then: ", data))
  .catch((error) => console.log("Catch: ", error))