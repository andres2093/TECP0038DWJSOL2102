function sumar(num1, num2) {
  console.log("Sumar");
  console.log(num1 + num2);
}

function restar(num1, num2) {
  console.log("restar");
  console.log(num1 - num2);
}

function dividir(num1, num2) {
  console.log("dividir");
  console.log(num1 / num2);
}

function multiplicar(num1, num2) {
  console.log("multiplicar");
  console.log(num1 * num2);
}

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min))
}

module.exports = {
  sumar,
  restar,
  dividir,
  multiplicar,
  random
}