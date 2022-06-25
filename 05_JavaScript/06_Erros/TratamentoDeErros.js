/* Atividade: validação de erros por tipo

O objetivo é que a função receba um array 
e retorne ele caso o seu tamanho corresponda 
ao número enviado como parâmetro na função. 
Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações:

Se os parâmetros não forem enviados, 
lance um erro do tipo ReferenceError

Se o array não for do tipo 'object', 
lance um erro do tipo TypeError

Se o número não for do tipo 'number', 
lance um erro do tipo TypeError

Se o tamanho do array for diferente 
do número enviado como parâmetro, 
lance um erro do tipo RangeError

Utilize a declaração try...catch

Filtre as chamadas de catch por cada tipo de erro 
utilizando o operador instanceof 
*/

function validaArray(array, valor){

    try{
        if(!array || !valor) throw new ReferenceError('Quantidade de argumentos inválida.');

        if(typeof(array) !== 'object') throw new TypeError('O array precisa ser do tipo object');

        if(typeof(valor) !== 'number') throw new TypeError('O valor precisa ser do tipo number');

        if(array.length != valor) throw new RangeError('Tamanho de array inválido');

        return array;
    }
    catch(e){

        if(e instanceof ReferenceError){
            console.log('Ocorreu um ReferenceError');
        }
        else if(e instanceof TypeError){
            console.log('Ocorreu um TypeError');
        }
        else if(e instanceof RangeError){
            console.log('Ocorreu um RangeError');
        }
        else{
            console.log('Ocorreu um erro inesperado: ' + e);
        }

        console.log(e.name + ': ' + e.message);
        //console.log(e.stack);
    }
}



console.log('\n', validaArray([0, 1, 2, 3], 4), '\n');

