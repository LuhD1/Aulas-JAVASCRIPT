// Elementos de dados digitados pelo user.
const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocal = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");

// Saber quando o botão foi clicado pelo user.
const btnadd = document.getElementById("btn-add");

// Montar o caorpo de linhas da tabela
const ctdTabela = document.getElementById("conteudo-tabela");

btnadd.addEventListener("click", () => {
    let user = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocal.value,
        telefone: campoTelefone.value,
    };
    ctdTabela.innerHTML += `
    <tr>
        <td>${user.email}</td>
        <td>${user.cep}</td>
        <td>${user.uf}</td>
        <td>${user.localidade}</td>
        <td>${user.telefone}</td>
    <tr>`
});









// 1 - Coletar dos inputs o que foi digitado
// 2 - Guardar em um array
// 3 - Montar as linhas da tabela