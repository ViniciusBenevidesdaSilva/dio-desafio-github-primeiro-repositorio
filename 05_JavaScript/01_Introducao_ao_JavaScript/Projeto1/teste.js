//console.log("Hello world!")

/*
function soma(a, b) {
    return a + b;
}

var y = 2;
const VALOR = 5;


console.log(soma(y, VALOR));
*/


function retornaPares(array){

    let pares = [];

    for(let i = 0; i < array.length; i++){
        
        if(array[i] % 2 === 0){
            pares.push(array[i]);
        }
        else{
            console.log(`${array[i]}  não é par.`);
        }
    }

    console.log('\nOs números pares são: ', pares, '\n');
}

let array = [1, 2, 4, 5, 7, 8];
retornaPares(array);

