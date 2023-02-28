// function imc(peso, altura) {
//     let calcImc = peso / (altura * altura)
//     console.log(`O seu IMC é de ${calcImc}`)
//     return calcImc
// }

// imc(75, 1.75)

// function transf(num) {
//     let tranformar = num * 100;

//     return `${tranformar.toFixed(1)}%`
// }

// let calc = transf(0.01)
// console.log(`${calc}`)

// function numeroPF(num) {

//     if (num < 0) {
//         return true
//     } else {
//         return false
//     }

// }
// console.log(numeroPF(-2))

// function converter(num) {
//    const reais = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(num);

//    return reais;

// }

// console.log(converter(500000))


// function contar(maximo) {
//     for (let i = 1; i <= maximo; i++) {
//         console.log(i)

//     }
// }

// contar(5)

// function nomeCompleto(nome, sobrenome) {
//     return nome + " " + sobrenome;
// }

// console.log(nomeCompleto("Lucas", "Damasceno"))
// let meuNome = nomeCompleto("Luke", "Dev")
// console.log(meuNome)

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

function calcularR(raio) {
    return Math.PI * raio * raio
}

function nivelC(area) {
    if (area >= 1 && area <= 20) {
        return "Nivel I"
    } else if (area >= 20 && area <= 40){
        return "Nivel II"
    } else {
        return "Nivel invalido"
    }
}

console.log(nivelC(calcularR(5)))
// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

console.log("------")

function areaCirculo(raio){
    return Math.PI * (raio * raio)
}

function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(5)))