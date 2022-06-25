function calculadora(){

    do{
        
        let valorOperacao = prompt('Escolha uma operacao:\n[1] para soma\n[2] para subtração\n[3] para multiplicação\n[4] para divisão\n[5] para divisão inteira\n[6] para potenciação\n');

        let funcaoOperacao = verificaOperacao(valorOperacao);

        while(funcaoOperacao === null){

            alert('OPÇÃO INVÁLIDA!');
            valorOperacao = prompt('Escolha uma operacao:\n[1] para soma\n[2] para subtração\n[3] para multiplicação\n[4] para divisão\n[5] para divisão inteira\n[6] para potenciação\n');
            funcaoOperacao = verificaOperacao(valorOperacao);
        
        }

        let valor1 = Number(prompt('Insira o valor 1:'));

        while(!valor1){
            alert('Parametro invalido!');
            valor1 = Number(prompt('Insira o valor 1:'));
        }

        let valor2 = Number(prompt('Insira o valor 2:'));


        while(!valor2){
            alert('Parametro invalido!');
            valor2 = Number(prompt('Insira o valor 2:'));
        }

        alert(funcaoOperacao(valor1, valor2));

    }
    while(novaOperacao());

    alert('Até mais!');
}


function novaOperacao(){

    do{
        let opcao = prompt('Deseja fazer uma nova operacao?\n [S] / [N]').toUpperCase();
    
        if(opcao == 'S'){
            return true;
        }
        else if(opcao == 'N'){
            return false;
        }

        alert('Opção Inválida!');
    }
    while(true);
}


function verificaOperacao(valor){

    switch(Number(valor)){
        case 1:
            return soma;
        case 2:
            return subtracao;
        case 3:
            return multiplicacao;
        case 4:
            return divisao;
        case 5:
            return divisaoInteira;
        case 6:
            return potenciacao;
        default:
            return null;
    }
}


function soma(n1, n2){
    return `${n1} + ${n2} = ${n1 + n2}`;
}

function subtracao(n1, n2){
    return `${n1} - ${n2} = ${n1 - n2}`;
}

function multiplicacao(n1, n2){
    return `${n1} * ${n2} = ${n1 * n2}`;
}

function divisao(n1, n2){
    return `${n1} / ${n2} = ${n1 / n2}`;
}

function divisaoInteira(n1, n2){
    return `${n1} % ${n2} = ${n1 % n2}`;
}

function potenciacao(n1, n2){
    return `${n1} ** ${n2} = ${n1 ** n2}`;
}


calculadora();

