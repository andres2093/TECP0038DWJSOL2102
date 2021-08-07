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

getApi(ordernar)