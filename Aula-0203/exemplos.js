// Aula 02.03
// Tópicos: Objetos aninhados e Arrays de objetos

// Objetos aninhados = Objetos dentro de outro

let pessoa = {
    nome: "Lucas Damasceno",
    CPF: "499.066.100-00",
    email: "damasceno.lucas.o@gmail.com",
    endereco: {
        cidade: "Cotia",
        estado: "SP",
        cep: "06719-025",
    },
    formacao: [
        { escola: "EE Kenkite", ano: 2023 },
        { escola: "EE Batista", ano: 2024 },
    ],
};
console.log(pessoa.endereco)
console.log(pessoa.formacao[0].escola)