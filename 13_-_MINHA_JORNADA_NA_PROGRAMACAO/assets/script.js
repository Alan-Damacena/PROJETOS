//Variáveis para chamarem os containers e seus respectivos botões
let botao1 = document.getElementById("Texto-01");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");
let voltar = document.getElementById('Texto-04');
let voltar2 = document.getElementById('Texto-06');

let container = document.getElementById("container-01")
let container2 = document.getElementById("container-02");
let container3 = document.getElementById("container-05");
let container4 = document.getElementById("container-06");
let container5 = document.getElementById("container-06");

//Chamando ações ao clicar os botões
botao1.addEventListener("click",novapagina)
botao2.addEventListener("click",novapagina1)
botao3.addEventListener("click",novapagina2)
voltar.addEventListener("click",voltando)
voltar2.addEventListener("click",voltando2)

//Funções que serão executadas ao serem realizadas ações nos botões
function novapagina(){

    if(container.style.display === "block"){
        container.style.display = "none";
        container2.style.display = "block";
    } else {
        container.style.display = "block";
        container2.style.display = "none";
    }    
}

function novapagina1(){

    if(container2.style.display === "block"){
        container3.style.display = "block";
        container2.style.display = "none";       
    } else {
        container2.style.display = "block";
        container3.style.display = "none";  
    }   
}

function novapagina2(){

    if(container2.style.display === "block"){
        container5.style.display = "block";
        container2.style.display = "none";     
    } else {
        container5.style.display = "none";
        container2.style.display = "block";  
    }    
}

function voltando(){

    if(container3.style.display === "block"){
        container3.style.display = "none";
        container2.style.display = "block";       
    } else {
        container2.style.display = "none";
        container3.style.display = "block";  
    }   
}

function voltando2(){

    if(container4.style.display === "block"){
        container4.style.display = "none"
        container2.style.display = "block";       
    } else {
        container2.style.display = "none";
        container4.style.display = "block";  
    }   
}
