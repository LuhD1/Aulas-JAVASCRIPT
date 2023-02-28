let nota1 = 10;
let nota2 = 0;
let nota3 = 0;

let calc = (nota1 + nota2 + nota3) / 3;
let notaFinal = calc.toFixed(0)
console.log(notaFinal)

if (notaFinal > 7) {
    console.log("O Aluno foi aprovado")
} else if (notaFinal >= 5 && notaFinal <= 7) {
    console.log("O aluno ficará de reforço")
} else if (notaFinal < 5) {
    console.log("O aluno foi reprovado")
}

console.log("---------------")

var altura = 1.80;
var peso = 75;
var imc = peso / (altura * altura);


if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Obesidade I");
} else if (imc >= 35 && imc < 39.9) {
    console.log("Obesidade II");
} else if (imc >= 40) {
    console.log("Obesidade III ou Mórbida");
}

console.log("---------------")

let a = 5;
let b = 10;

if (a > b) {
    console.log("a é maior do que b");
} else if (a < b) {
    console.log("b é maior do que a");
} else {
    console.log("a e b são iguais");
}


// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

