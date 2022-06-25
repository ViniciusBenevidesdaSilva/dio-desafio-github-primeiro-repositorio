/*
Atividade

Crie uma função que recebe dois números 
como parâmetros.

Confira se os números são iguais.

Confira se a soma dos números é maior que 10 
ou menor que 20.

Retorne uma string dizendo 
"Os números num1 e num2 não/são iguais. 
Sua soma é soma, que é maior/menor que 10 
e maior/menor que 20".

Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. 
Sua soma é 3, que é menor que 10 e menor que 20.
*/

function desafio(num1, num2){

    if((!num1 && num1 != 0) || (!num2 && num2 != 0)) return 'Defina dois números válidos';


    let resultado = `Os numeros ${num1} e ${num2} `;

    resultado += (num1 === num2) ?  'são iguais.' : 'não são iguais. ';

    let soma = num1 + num2;
    resultado += `Sua soma é ${soma}, que é `

    resultado += (soma < 10) ?  'menor' : 'maior';

    resultado += ' que 10 e '

    resultado += (soma < 20) ?  'menor' : 'maior';

    resultado += ' que 20.'

    return resultado;
}


var valor1 = Number(prompt("Informe o primeiro valor: "));
var valor2 = Number(prompt("Informe o primeiro valor: "));

alert(desafio(valor1, valor2));
