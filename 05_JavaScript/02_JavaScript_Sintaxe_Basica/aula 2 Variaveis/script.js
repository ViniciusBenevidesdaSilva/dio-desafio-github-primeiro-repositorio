// Tipos Primitivos

function ExibeValorETipo(variavel){
    console.log(variavel);
    console.log(typeof(variavel));
}

//boolean
var booleana = false;
ExibeValorETipo(booleana);  // boolean

var numeroQualquer = 1;
ExibeValorETipo(numeroQualquer);  // number

var nome = "Benevides"
ExibeValorETipo(nome);  // string

var variavel1;  // Escopo global
ExibeValorETipo(variavel1);  // undefined

let variavel2;  // Escopo local
ExibeValorETipo(variavel2);  // undefined

const CONSTANTE = 5;  // constante
ExibeValorETipo(CONSTANTE); 

var escopoGlobal = 'global';

function funcao(){
    let espocoLocal = 'local';
}

//console.log(espocoLocal);  
// Dará um erro pois a variável não é visivel fora da função


console.log(5 + 3);  // 8
console.log(5 - 3);  // 2
console.log(5 * 3);  // 15
console.log(5 / 3);  // 1.666
console.log(5 % 3);  // 2
console.log(5 ** 3);  // 125


console.log("5 > 2: ", 5 > 2);  // true
console.log("5 < 2: ", 5 < 2);  // false
console.log("5 >= 2: ", 5 >= 2);  // true
console.log("5 <= 2: ", 5 <= 2);  // false
