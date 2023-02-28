// Aula 27.02
// Tópico: Arrys

let figuras = ["Coracao", "Estrela", "ok", "Nao", "joia", "sorriso"]



 let numeros = [3, 1, 5, 7, 2];
//  for (let i = 0; i <= numeros.length; i++) {
//     console.log(numeros[i]);
    
//  }

// for (let i = 0; i < figuras.length; i++) {
//     console.log(`aaa ${i} e aaaa ${figuras[i]}`)
    
// }

// let nomes = ["Lucas", "Debora", "José"]
// for (let nome of nomes) {
//     console.log(nome)
// }

let listaCarrinho = [];

listaCarrinho.push("a")
listaCarrinho.push("b", "c", "d")

// o Push adiciona um elemento no array
for (let i = 0; i < listaCarrinho.length; i++) {
  console.log(`${listaCarrinho[i]}`)
}
listaCarrinho.pop()
for (let i = 0; i < listaCarrinho.length; i++) {
    console.log(`${listaCarrinho[i]}`)
  }