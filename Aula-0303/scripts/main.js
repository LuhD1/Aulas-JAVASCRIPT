const semaforoImg = document.getElementById("semaforo-img")
const semafText = document.getElementById("semaforo-descricao")

function trocarVermelho() {
    semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png"
    semafText.innerHTML = 'Pare!'
}
function trocarAmarelo() {
    semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png"
    semafText.innerHTML = 'Atenção!'
}
function trocarVerde() {
    semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png"
    semafText.innerHTML = 'Avance :3'
}

