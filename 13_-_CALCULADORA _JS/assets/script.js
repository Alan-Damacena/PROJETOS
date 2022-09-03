function calculadora() {
    
    //Para registrar entrada de usuário (seria um alerta)
    const operacao = prompt('CALCULADORA DO ALAN: \n Para realizar ser cálculo, escolha uma operação: \n 1 - SOMA (+) \n 2 - SUBTRAÇÃO (-) \n 3 - MULTIPLICAÇÃO (*) \n 4 - DIVISÃO REAL (/) \n 5 - DIVISÃO INTEIRA (%) \n 6 - POTENCIAÇÃO (**)')

    //Para validar se o operador digitado for diferente de 1 a 6 ou for uma string
    if (!operacao || operacao >= 7){
       
        alert(`ALAN, essa operação é INVÁLIDA!!!`);
        calculadora();

    } else{
        
        let n1 = Number(prompt("ALAN, insira o primeiro valor: "));
        let n2 = Number(prompt("ALAN, insira o segundo valor: "));
        let resultado //Deixa sem um valor definido
        
        //Para validar se o que foi digitado for diferente de um número
        if (!n1 || !n2){

            alert(`Erro - parâmetro inválido`);
            calculadora();

        } else{
        
            //FUNÇÕES QUE REALIZAM OS CÁLCULOS
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira(){
                resultado = n1 % n2
                alert(`ALAN, o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            //PARA LIMPAR A PÁGINA A CADA OPERAÇÃO REALIZADA
            function novaOperacao(){

                let opcao = prompt(`ALAN, deseja fazer uma nova operação? \n 1 - SIM \n 2 - NÃO`)

                if (opcao == 1){

                    calculadora();

                } else if (opcao == 2){

                    alert(`Ok, até mais ALAN!!!`)

                } else{

                    alert(`ALAN, digite uma opção válida!!!`);
                    novaOperacao();
                    
                }

        }   

            //VERIFICADOR DE OPERAÇÃO: Para validar se estão entrando os operadores corretos (+, -, * ...)
            if(operacao == 1){
                soma();
            } else if (operacao == 2){
                subtracao();
            } else if (operacao == 3){
                multiplicacao();
            } else if (operacao == 4){
                divisaoReal();
            } else if (operacao == 5){
                divisaoInteira();
            } else if (operacao == 6){
                potenciacao();
            }

        }

    }

}

calculadora()