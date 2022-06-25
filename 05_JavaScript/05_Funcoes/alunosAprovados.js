/* Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos 
e um número que irá representar a média final;

Percorra o array e popule um novo array auxiliar 
apenas com os alunos cujas notas são maiores 
ou iguais à média final;

Utilize a técnica "object destructuring" 
para manipular as propriedades desejadas de cada aluno.
*/

function alunosAprovados(arrayAlunos, media){
    let arrayRetorno = [];

    for(let i = 0; i < arrayAlunos.length; i++){

        const {nota, nome} = arrayAlunos[i]

        if(nota >= media)
            arrayRetorno.push(nome);
    }

    return arrayRetorno;
}


const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18'
    },    
    {
        nome: 'Paulo',
        nota: 6,
        turma: '18'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '18'
    }
];

console.log(alunosAprovados(alunos, 7));

