const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let num1, num2, resultado;

const question1 = () => (
  new Promise((resolve, reject) => {
    readline.question('¿Quién eres?', name => {
      console.log("Hola: ", name);
      num1 = name;
      resolve()
    })
  })
)

const question2 = ()=> (
  new Promise((resolve, reject) => {
    readline.question('¿Quién eres 2?', name => {
      console.log("Hola: ", name);
      num2 = name;
      resolve()
    })
  })
)

const main = async () => {
  await question1()
  await question2()
  console.log(num1 + num2);
}

// Cerrar el proceso
// readline.close()

// Limpiar terminal
// process.stdout.write('\033c');

main()