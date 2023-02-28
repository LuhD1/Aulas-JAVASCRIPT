// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let resultado = 0;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let number of numeros) {
    resultado += number;
}
// console.log(resultado)

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

let notas = 0;
const notas1 = [7, 8, 9, 4, 5,];
for (let element of notas1) {
    notas = element + notas;
}
notas = notas / notas1.length;
// console.log(notas)

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.


let numeros1 = [5, 12, 16, 33, 8, 10, 6];
let maiorNumero = numeros1[0];
for (let i = 0; i < numeros1.length; i++) {
    if( numeros1[i] > maiorNumero){
        maiorNumero = numeros1[i];
    }
    
}
console.log(`O maior número do Array é: ${maiorNumero}`);