let nome = "Damasceno";
console.log(nome[5])

let nome2 = "Lucas";
console.log(nome2.length)

console.log(nome.toLocaleUpperCase()) // Retorna tudo maiúsla.
console.log(nome.toLocaleLowerCase()) // Retorna tudo minuscula.

let arquivo = "som.mp4";
console.log(arquivo.endsWith(".mp4")); // Filtrar arquivos. Retorna um valor boleano

console.log(arquivo.startsWith("som")); // Filtrar nome de arquivos.

console.log(arquivo.includes("m")); // Saber se tem algo dentro da string "" 

console.log(nome.indexOf("a")); // Busca a posição do caractere -- Na primeira ocorrência

console.log(nome.lastIndexOf("a")); // Bisca a posição do caractere da direita p/ esquerda

console.log(nome.replace("Damasceno", "Debbies")); // Troca uma palavra por outra

let paralvra = "Lucão"
console.log(paralvra.slice(1, 3)); // Corta a letra na posição indicada