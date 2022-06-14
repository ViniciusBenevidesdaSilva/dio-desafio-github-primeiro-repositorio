var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function decrement(){
    if(currentNumber > -10)
        currentNumberWrapper.innerHTML = --currentNumber;

        VerificaCor();
}

function increment(){
    if(currentNumber < 10)
        currentNumberWrapper.innerHTML = ++currentNumber;

    VerificaCor();
}

function reiniciar(){
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    VerificaCor();

}


function VerificaCor(){
    if(currentNumber === 0){
        currentNumberWrapper.style.color = 'black'
    }
    else if(currentNumber > 0){
        currentNumberWrapper.style.color = 'blue'
    }
    else{
        currentNumberWrapper.style.color = 'red'
    }
}



//console.log("Inicio");
