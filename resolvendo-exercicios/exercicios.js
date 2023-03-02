// Exercicio-01

const dobrarNum = (num) => num + num;
console.log(`O dobro do número será: ${dobrarNum(5)}`);

// Exercicio-02

const numQuadrado = (num) => num * num;
console.log(`O número ao quadrado será: ${numQuadrado(5)}`);

// Exercicio-03

const interpolacao = (nome, idade, endereco) => console.log(`Olá, eu sou o ${nome}, tenho ${idade} anos e moro em ${endereco}`)

interpolacao("Lucas", "Damasceno", "São Paulo")

// Exercicio-04

const formatacaoData = (dia, mes, ano) => console.log(`${dia}/${mes}/${ano}`)

formatacaoData(28, 05, 1999)

// Exercicios-05

const addDesconto = (produto) => console.log(`O preço do produto com desconto será de: ${produto - 10.0}`)

addDesconto(50)

// Exercicios-06

function repetir(palavra, num) {
    for (let i = 0; i < num; i++) {
        console.log(palavra)

    }

}
repetir("Lucas", 3)

// Exercicio-07

function A(x) {
    function B(y) {
       function C(z) {
          console.log(x + y + z);
       }
       C(10);
    }
    B(10);
 }
 A(10)
 