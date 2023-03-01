// Método = Ação de um objeto

let pet = {
  // Atributos
  nome: "Robinho",
  idade: 2,
  peso: 3.5,
  // Métodos
  dormir() {
    console.log("a mimir");
  },
  comer(comida) {
    console.log(`Pet comendo.. ${comida} :)`);
  },
};

let pessoa = {
  nome: "Lucas",
  idade: 23,
  nacionalidade: "Brasileiro",
  dizerOi() {
    console.log(`Olá, o meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}`);
  },
};

pessoa.dizerOi();
