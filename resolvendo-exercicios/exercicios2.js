function numeroDeCaracteristicas(letra) {
    console.log(letra.length)
}
// numeroDeCaracteristicas("Damasceno")

function retornaNome(nome) {
    console.log(nome.toLocaleUpperCase())
}
// retornaNome("Lucas")

// Escreva uma função que receba uma string e retorne a mesma string em
// letras minúsculas.

function retornaNome2(nomee) {
    console.log(nomee.toLocaleUpperCase())
}

// retornaNome2("Lucas")

// Escreva uma função que receba duas strings e retorne true se elas forem
// iguais ou false caso contrário.

function retornaTrue(palavra, palavra2) {
    if (palavra === palavra2) {
        return true
    } else {
        return false
    }
}

// console.log(retornaTrue("Lucas", "Lucas"))

function recebaA(frase4, palavra3) {
    console.log(frase4.replace(palavra3, "***"))
};

// recebaA("Eu sou jogador de league of legends e sou mt bom", "bom")

let arryzin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let repetir of arryzin) {
    // console.log(repetir) 
}

// Crie uma função que recebe um array de strings como parâmetro e re-
// torne um novo array apenas com as strings acima de 5 caracteres.

let arrayStr = ["Ana", "Nicolas", "Marcos", "Lucas"]
let arrayMaior = [];
function retornaNovoArry(array) {

    array.forEach((elemento3) => {
        if (elemento3.length > 1) {
            arrayMaior.push(elemento3)
        } else {
            console.log("Agora deu errado!")
        }
        console.log(arrayMaior)
    });
}

// retornaNovoArry(arrayStr)

// Crie uma função que recebe um array de números e retorna um novo
// array com apenas os números que são maiores que a média do array do
// parâmetro.

function filtrarStrings(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        if (string.length > 5) {
            novoArray.push(string);
        }
    }
    return novoArray;
}
// console.log(filtrarStrings(["Javascript", "VueJS", "Node", "Angular", "React", "CSS"]));

function filtrarNumerosMaioresQueMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    const media = soma / array.length;
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        if (numero > media) {
            novoArray.push(numero);
        }
    }
    return novoArray;
}
let resultadoArray = filtrarNumerosMaioresQueMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(resultadoArray)

