let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    //PEGAR O VALOR DIGTADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = ` <div class="item">
        <div class="item-icone">
            <i class="mdi mdi-check-circle"></i>
        </div>
        <div class="item-nome">
            Teste de Tarefa
        </div>
        <div class="item-botao">
            <button class="delete"><i class="mdi mdi-delete"> Deletar </i></button>
        </div>
    </div>`;
    }
}