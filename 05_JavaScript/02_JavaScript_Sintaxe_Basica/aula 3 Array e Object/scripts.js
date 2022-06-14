/*
let array = ['string', 1, true, ['array1', 2]];

console.log(array);
//console.log(array[0]);

//array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('item no começo');
console.log(array);

console.log(array.indexOf('item no começo'));  // 0
console.log(array.indexOf('item inexistente'));  // -1

//array.splice(0, 3);
//console.log(array);

let novoArray = array.splice(0, 3);
console.log(novoArray);
*/

let object = {
    string: 'Texto',
    numero: 1,
    booleano: true
}

var stringDoObjeto = object.string;
var {string} = object;

console.log(string);
console.log(stringDoObjeto);
