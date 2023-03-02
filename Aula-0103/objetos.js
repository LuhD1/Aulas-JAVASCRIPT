// Objetos JAVASCRIPT
// Objetos = servem para estruturar dados
// - Propriedades (Características)
// - Métodos (ações)

let pet = {
    nome: "Biscoito", // Propriedade-valor
    idade: 2, // Propriedade-valor
    peso: 3.5, // Propriedade-valor
    especie: "Gato", // Propriedade-valor
}; // {} Indica que estou declarando um objt;
// console.log(pet.nome)


let pet2 = {
    nome: "Caramelo", // Propriedade-valor
    idade: 1, // Propriedade-valor
    peso: 2, // Propriedade-valor
    especie: "Gato", // Propriedade-valor
}; // {} Indica que estou declarando um objt;
// console.log(pet2.nome)

let pet3 = {
    nome: "Json", // Propriedade-valor
    idade: 1, // Propriedade-valor
    peso: 1.5, // Propriedade-valor
    especie: "Gato", // Propriedade-valor
    comidaFavorita: "Ração"
}; // {} Indica que estou declarando um objt;
console.log(`${pet3.comidaFavorita} do ${pet3.nome}`)


pet.cor = "Preto"
console.log(pet)
pet.cor = "Branco"
console.log(pet)