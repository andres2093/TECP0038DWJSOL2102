// const http = require('http')

// let server = http.createServer(function(req, res) {
//   console.log(req);
//   res.end("Hola mundo!!!")
// })

// server.listen(3000, function() {
//   console.log('Servidor corriendo!!!');
// })

const https = require('https')
const fs = require('fs')
const path = require('path')

function descargarImagen(url, imageName) {
  let file = fs.createWriteStream(path.join(__dirname, '', imageName + ".png"));
  https.get(url, function (response) {
    response.pipe(file);
  });
}

function getApi() {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
    let data = ''
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      let body = JSON.parse(data)
      console.log('Titulo: ', body.title);
      console.log('Explicacion: ', body.explanation);
      console.log('Url: ', body.url);

      descargarImagen(body.url, body.title)
    })
  }).on('error', (err) => {
    console.log('Error: ', err);
  })
}

getApi()