
var jogador1 = 1;
var jogador2 = 0;

var placar;

console.log((jogador1 != -1 && jogador2 != -1) ? "Jogadores válidos" : "jogadores inválidos");

if(jogador1 > jogador2){
    console.log("JOGADOR 1 marcou ponto");
    placar = jogador1 > jogador2;
} 
else if(jogador2 > jogador1){
    console.log("JOGADOR 2 marcou ponto");
    placar = jogador2 > jogador1;
} 
else{
    console.log("NINGUÉM marcou ponto");
}

switch(placar){

    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou");
        break;

    case jogador2 > jogador1:
            console.log("Jogador 2 ganhou");
            break;

    default:
        console.log("Empate");
        break;   
}
