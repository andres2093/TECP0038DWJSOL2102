let num1, num2, opcion;

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const menu = () => {
    console.log('Operaciones disponibles');
    console.log('1) Para Sumar');
    console.log('2) Para Restar');
    console.log('3) Para Multiplicar');
    console.log('4) Para Dividir');
    console.log('5) Salir');
}

const question = () => (
    new Promise((resolve, reject) => {
        readLine.question('¿Qué operación quires realizar? ', answer => {
            if(isNaN(answer)){
                process.stdout.write('\033c');
                console.log('Agrega una opción valida!');
                main();
            } else if(parseInt(answer) < 5){
                opcion = answer;
                resolve();
            } else if(answer === "5"){
                readLine.close();
            } else {
                process.stdout.write('\033c');
                console.log('Agrega una opción valida!');
                main();
            }
        })
    })
)

const question2 = (esPrimero) => (
    new Promise((resolve, reject) => {
        readLine.question(esPrimero ? 'Primer numero: ': 'Segundo número: ', answer => {
            if(!isNaN(answer)){
                if(esPrimero){
                    num1 = Number(answer);
                } else {
                    num2 = Number(answer);
                }
                resolve();
            } else {
                process.stdout.write('\033c');
                console.log('Agrega un número!');
                main();
            }
        })
    })
)

const calc = () => {
    let res;
    switch (opcion) {
        case '1':
            res = `${num1} + ${num2} = ${num1 + num2}`
            break;
        case '2':
            res = `${num1} - ${num2} = ${num1 - num2}`
            break;
        case '3':
            res = `${num1} * ${num2} = ${num1 * num2}`
            break;
        case '4':
            res = `${num1} / ${num2} = ${num1 / num2}`
            break;
        default:
            res = "Error"
            break;
    }
    console.log(res);
}

const again = () => (
    new Promise((resolve, reject) => {
        readLine.question('Quieres realizar otra operación? \n1) Si, 2) No ', answer => {
            if(answer === '1'){
                process.stdout.write('\033c');
                main();
            } else if(answer === '2') {
                readLine.close()
            } else {
                process.stdout.write('\033c');
                console.log('Agrega una opción valida!');
                main();
            }
            resolve()
        })
    })
)

const main = async () => {
    menu()
    await question()
    await question2(true)
    await question2(false)
    calc()
    await again()
}

main()