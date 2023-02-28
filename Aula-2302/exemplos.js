// Aula 23.02
// Tópico: Funções

// Função = Procedimento = método

function somarNotas(a, b, c) {
    let soma = (a + b + c) / 3;
    console.log(`A média das notas vai ser ${soma}.`)
    return soma
}

somarNotas(1, 5, 9)

let somar = somarNotas(1, 6, 9)
console.log(somar)

function media(a, b, c) {
    let med = somarNotas(a, b, c)
    if (med >= 7) {
        return true;
    } else {
        return false;
    }
}

let statusA = media(3, 8, 2)
console.log(statusA)
