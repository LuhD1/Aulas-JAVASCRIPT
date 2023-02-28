// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.


let idade = 6;
let dinheiro = 200;

if (idade >= 18 && dinheiro >= 20) {
    console.log("A pessoa pode beber")
    dinheiro = dinheiro - 20
} else console.log("A pessoa não pode beber")

console.log(`A pessoa ficará com ${dinheiro} Reais`)

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let salario = 10000;

if (salario < 500) {
    salario = salario + 50;
    console.log(`O salario vai ser de ${salario} reais`)
} else if (salario >= 500 && salario <= 1000) {
    salario = salario + 25;
    console.log(`O salario vai ser de ${salario} reais`)
} else {
    console.log(`O salario vai ser de ${salario} reais`)
}

console.log(salario)

let 