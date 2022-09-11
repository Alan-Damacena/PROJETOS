//Selecionando os botões, a imagem inicial e a tela(container)
const c6_1 = document.getElementById("btn-01");
const c6_2 = document.getElementById("btn-02");
const c6_3 = document.getElementById("btn-03");
const c6_4 = document.getElementById("btn-04");
const c6_5 = document.getElementById("btn-05");
const c6_6 = document.getElementById("btn-06");
const c6_7 = document.getElementById("btn-07");
const c6_8 = document.getElementById("btn-08");
const limpar = document.getElementById("btn-09");
const imagem = document.getElementById("title");
const container = document.getElementById('container')

//Adicionando as trocas de imagem e de fundo de tela por meio das funções
c6_1.onclick = function acqua(){
    
    imagem.src="./assets/imagens/acqua.png";
    imagem.style.borderRadius="10px"
}

c6_2.onclick = function rainbow(){
    imagem.src="./assets/imagens/rainbow.jpg";
    imagem.style.borderRadius="10px"
}

c6_3.onclick = function gold(){
    imagem.src="./assets/imagens/gold.jpg";
    imagem.style.borderRadius="10px"
}

c6_4.onclick = function spice(){
    imagem.src="./assets/imagens/spice.png";
    imagem.style.borderRadius="10px"
}

c6_5.onclick = function carbon(){
    imagem.src="./assets/imagens/carbon.png";
    imagem.style.borderRadius="10px"
}

c6_6.onclick = function boreal_forest(){
    imagem.src="./assets/imagens/boreal_forest.png";
    imagem.style.borderRadius="10px"
}

c6_7.onclick = function bubblegum(){
    imagem.src="./assets/imagens/bubblegum.jpg";
    imagem.style.borderRadius="10px"
}

c6_8.onclick = function red(){
    imagem.src="./assets/imagens/red.jpeg";
    imagem.style.borderRadius="10px"
}

limpar.onclick = function limpar(){
    imagem.src="./assets/imagens/escolha.png";
}

