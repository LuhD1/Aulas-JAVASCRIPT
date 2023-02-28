// Estritiras de seleção

let diaDaSemana = "3";

switch (diaDaSemana) {
    case "1":
        console.log("Segunda-Feira")
        break;
    case "2":
        console.log("Terça-Feira")
        break;
    case "3":
        console.log("Quarta-Feira")
        break;
    case "4":
        console.log("Quinta-Feira")
        break;
    case "5":
        // console.log("Sexta-Feira")
        break;
    case "6":
        console.log("Sabado")
        break;
    case "7":
        console.log("Domingo")
        break;
    default:
        console.log("Esse dia não existe!")
}
console.log("-------")
console.log("Exercício IV")

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.
// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let comida = "chocolate";

switch (comida) {
    case "batata":
    case "carne":
    case "chocolate":
        console.log("hmm, adoro")
        break;
    case "pizza":
    case "sanduíche":
        console.log("As vezes")
        break;
    default: 
        console.log("Quero não!")
        break;
}

console.log("-------")
console.log("Exercício V")
// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let numero = 16;

if (numero % 2 === 0) {
    console.log("O número é par!") 
} else {
    console.log("O número é impar")
}