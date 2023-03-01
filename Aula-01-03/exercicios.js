let contaBancaria = {
    codigo: 001,
    saldo: 5000,
    CPF: "499.068.000-00",
    nome: "Lucas",
    sacar(saque) {
        this.saldo -= saque
        console.log(`Saque de ${saque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
        efetuado com sucesso! NOVO SALDO DE ${this.nome} é: ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    },
    doposito(depositar) {
        this.saldo += depositar
        console.log(`Deposito de ${depositar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
         efetuado com sucesso! NOVO SALDO DE ${this.nome} é: ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `)
    },
}

// contaBancaria.sacar(1)

let produto = {
    nome: "SmartPhone",
    descricao: "SmartPhone mais atualizado do mercado, ótima oportunidade para melhorar seu aparelho atual",
    quantidade: 10,
    precoOriginal: 1000,
    desconto: 15,
    calcularPrecoDesconto() {
        return this.precoOriginal -= this.desconto
    },
    apresentacao() {
        console.log(`Nome do produto '${this.nome}'. O ${this.descricao}, 
        com um valor de apenas: ${this.precoOriginal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}! 
        mas calma, temos um desconto de ${this.desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
        para você! corre, temos apenas ${this.quantidade} de produtos.`)
    },
    comprar(total) {
        this.quantidade -= total
        console.log(`Compra de ${total} de produtos efetuada com sucesso, restam ${this.quantidade} no estoque.`)
    }

}
console.log(produto.calcularPrecoDesconto())
produto.apresentacao()
produto.comprar(2)
