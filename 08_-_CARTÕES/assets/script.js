//Selecionando os botões, a imagem inicial e a tela(container)
const c6 = document.getElementById("btn-01");
const inter = document.getElementById("btn-02");
const mercado = document.getElementById("btn-03");
const neon = document.getElementById("btn-04");
const nubank = document.getElementById("btn-05");
const pagbank = document.getElementById("btn-06");
const picpay = document.getElementById("btn-07");
const will = document.getElementById("btn-08");
const limpar = document.getElementById("btn-09");
const imagem = document.getElementById("title");
const container = document.getElementById('container')

//Adicionando as trocas de imagem e de fundo de tela por meio das funções
c6.onclick = function cartaoc6(){
    
    imagem.src="./assets/imagens/c6.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(182,173,173)";
}

inter.onclick = function cartaointer(){
    imagem.src="./assets/imagens/inter.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(250,172,37)";
}

mercado.onclick = function cartaomercado(){
    imagem.src="./assets/imagens/mercado pago.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(17,16,16)";
}

neon.onclick = function cartaoneon(){
    imagem.src="./assets/imagens/neon.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(54,218,241)";
}

nubank.onclick = function cartaonubank(){
    imagem.src="./assets/imagens/nubank.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "blueviolet";
}

pagbank.onclick = function cartaopagbank(){
    imagem.src="./assets/imagens/pagbank.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(95, 89, 89)";
}

picpay.onclick = function cartaopicpay(){
    imagem.src="./assets/imagens/pic pay.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(70, 170, 70)";
}

will.onclick = function cartaowillbank(){
    imagem.src="./assets/imagens/will bank.png";
    imagem.style.borderRadius="20px"
    container.style.backgroundColor = "rgb(247, 247, 54)";
}

limpar.onclick = function limpar(){
    imagem.src="./assets/imagens/escolha.gif";
    container.style.backgroundColor = 'white';
}

