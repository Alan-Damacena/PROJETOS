
//Variáveis para chamarem os containers e seus respectivos botões
let a = document.getElementById("container-04");
let b = document.getElementById("container-05");
let c = document.getElementById("container-06");
let d = document.getElementById("container-07");

let e = document.getElementById("botao1");
let f = document.getElementById("botao2");
let g = document.getElementById("botao3");
let h = document.getElementById("botao4");

//Chamando ações ao clicar os botões
e.addEventListener("click",aparecer);
f.addEventListener("click",aparecer1);
g.addEventListener("click",aparecer2);
h.addEventListener("click",aparecer3);

//Funções que serão executadas ao serem realziadas ações nos botões
function aparecer(){
    
    if(a.style.display === "none"){

        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";

    } else{

        a.style.display = "none";

    }
    
} 

function aparecer1(){

    if(b.style.display === "none"){
    
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
    
    } else{
    
        b.style.display = "none";
          
    }
        
}

function aparecer2(){
    
    if(c.style.display === "none"){
    
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
            
    } else{
    
        c.style.display = "none";
         
    }

}

function aparecer3(){

    if(d.style.display === "none"){
        
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        
    } else{
                       
        d.style.display = "none";
            
    }
            
}