// Aula 28-02
// Tópicos: forEach, map

// forEach
// Para cada elemento no array, executa a função
let numeros = [1, 2, 3];

function mostrarValor(valor) {
  console.log(valor);
}

// for (let num of numeros) {
//   mostrarValor(num);
// }

// forEach
// Para cada elemento no array, executa a função

let addSimbolo = numeros.map((numeros) => numeros + 20)


// console.log(addSimbolo)

let nomeComExclamacao = ["Lucas", "Débora", "Math"];
let addSimbol = nomeComExclamacao.map((nomeComExclamacao) => nomeComExclamacao + "!")
// console.log(addSimbol)

let transform = ["Lucas", "Débora", "Math", "League"];
let verificar = transform.map((transforma) => {
    if (transforma.length < 5) {
        return "BATATA"
    } else {
       return transforma.toUpperCase()
    }
})
// console.log(verificar)

// Filter = aplica um teste em cada elemento e quem passar faz parte do novo array

