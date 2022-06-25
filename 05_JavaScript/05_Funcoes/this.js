/* Dada a função calculaIdade, 
utilize os métodos call e apply 
para modificar o valor de this. 
Crie seus próprios objetos para esta atividade!
*/


function calculaIdade(anos) {
	
    const {nome, idade} = this;

    return `Daqui a ${anos} anos, ${nome} terá ${idade + anos} anos de idade.`;
}

let pessoa = {
    nome: 'Bene',
    idade: 19
};

console.log(calculaIdade.call(pessoa, 10));
console.log(calculaIdade.apply(pessoa, [10]));
