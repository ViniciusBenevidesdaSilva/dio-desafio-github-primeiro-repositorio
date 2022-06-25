
/*
Verifique, de duas maneiras diferentes entre si, 
se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, 
indiferentemente, da esquerda para a direita 
ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function EhPalindromo(frase){

    frase = frase.replace(/ /gi, '').toUpperCase();
    
    if(!frase) return false;

    for(i = 0; i < frase.length / 2; i++){
        if(frase[i] !== frase[frase.length - i - 1]) 
            return false;
    }

    return true;
}

function verificaPalindromo(string){
    if(!string) return;

    return string.split("").reverse().join("") === string;
}


/* ----------------------- */

let texto = prompt('Digite o possivel palindromo:');

let resultado = EhPalindromo(texto) ? ' É': ' NÃO é';

//alert(texto.replace(/ /gi, ''));
alert(texto + resultado + ' palindromo.');

resultado = verificaPalindromo(texto) ? ' É': ' NÃO é';
alert(texto + resultado + ' palindromo.');


