// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.


function calcular(num1, num2, operador) {

    switch (operador) {
        case '+':
            console.log(`O resultado de ${num1} + ${num2} é: ${num1 + num2}`)
            break;
        case '-':
            console.log(`O resultado de ${num1} - ${num2} é: ${num1 - num2}`)
            break;
        case '*':
            console.log(`O resultado de ${num1} * ${num2} é: ${num1 * num2}`)
            break;
        case '/':
            console.log(`O resultado de ${num1} / ${num2} é: ${num1 / num2}`)
            break;
        default:
            console.log("Irmão, escreveu algo errado :b")
    }

}

// calcular(5, 3, '/')

// Exercício: Transforme as funções abaixo em arrow
function criarNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

const criarNomeCompleto1 = (nome, sobrenome) => nome + " " + sobrenome;
console.log(criarNomeCompleto1("Lucas", "Damasceno"))

function contar(maximo) {
    for (let i = 1; i <= maximo; i++) {
        console.log(i);
    }
}

const contar1 = (maximo) => {
    for (let i = 1; i <= maximo; i++) {
        console.log(i);
    }
}

contar(10)
function imc(peso, altura) {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);

    return calculo;
}

const imc1 = (peso, altura) => {
    let calculo1 = peso / (altura * altura);
    console.log(`O IMC é ${calculo1}`);

    return calculo1;
}

imc1(80, 1.75)