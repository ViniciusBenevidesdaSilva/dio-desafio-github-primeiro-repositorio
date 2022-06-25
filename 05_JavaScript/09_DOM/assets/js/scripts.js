
const alterarModo = function (){

    alteraClasses();

    alterarTextos();

    //LightMode = LightMode === false;
    //LightMode != LightMode;
}

function alteraClasses(){

    body.classList.toggle(darkModeText);
    footer.classList.toggle(darkModeText);
    botao.classList.toggle(darkModeText);
}

function alterarTextos(){

    let DarkMode = body.classList.contains(darkModeText);

    if(DarkMode){
        h1.innerHTML = "Dark Mode ON";
        botao.innerHTML = "Light Mode";
    }
    else{
        h1.innerHTML = "Light Mode ON";
        botao.innerHTML = "Dark Mode";
    }

}

const darkModeText = 'dark-mode';

const botao = document.getElementById('mode-selector');
botao.addEventListener('click', alterarModo);

const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');



