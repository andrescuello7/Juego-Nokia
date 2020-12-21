//Declaracion de variables
const lombris = document.getElementById('caja');
const comida = document.getElementById('uno');

// Buttones
const BotonArriba = document.getElementById('BotonAr');
const BotonIzquierdo = document.getElementById('BotonI');
const BotonAbajo = document.getElementById('BotonAb');
const BotonDerecho = document.getElementById('BotonD');

let leftRight = 0;
let TopRight = 0;

function BotonArribab() {
    TopRight += - 10;
    lombris.style.marginTop = TopRight + 'px';
}
function BotonAbajob() {
    TopRight += 10;
    lombris.style.marginTop = TopRight + 'px';
}
function BotonIzquierdob() {
    leftRight += - 10;
    lombris.style.marginLeft = leftRight + 'px';
}
function BotonDerechob() {
    leftRight += 10;
    lombris.style.marginLeft = leftRight + 'px';
}

function escape() {
    tecla = event.keyCode;

    if (tecla === 37) {
        leftRight += - 10;
        lombris.style.marginLeft = leftRight + 'px';
    } if (tecla === 39) {
        leftRight += 10;
        lombris.style.marginLeft = leftRight + 'px';
    } if (tecla === 38) {
        TopRight += - 10;
        lombris.style.marginTop = TopRight + 'px';
    } if (tecla === 40) {
        TopRight += 10;
        lombris.style.marginTop = TopRight + 'px';
    }

    function paredes() {
        if (leftRight < 0) {
            alert('ayuda Izquierda')
        }
        if (TopRight < 0) {
            alert('ayuda arriba')
        }
        if (leftRight > 380) {
            alert('ayuda Derecha')
        }
        if (TopRight > 380) {
            alert('ayuda Abajo')
        }
    }


    //Derecha Izquierda
    JSON.stringify(leftRight);
    localStorage.setItem('UnoOne', leftRight);
    //Arriba abajo
    JSON.stringify(TopRight);
    localStorage.setItem('UnoDos', TopRight);

    function paraFuncionar() {
        paredes()
    }
    paraFuncionar()
}

function randomTree() {
    //Comida
    let randomOne = Math.floor(Math.random() * 360) + 10;
    let randomTwo = Math.floor(Math.random() * 360) + 10;
    function ComidaOfGame() {
        comida.style.display = 'block';
        comida.style.marginLeft = randomOne + 'px';
        comida.style.marginTop = randomTwo + 'px';
    }
    ComidaOfGame()
    //Derecha Izquierda
    JSON.stringify(randomOne);
    localStorage.setItem('DosOne', randomOne);
    //Arriba abajo
    JSON.stringify(randomTwo);
    localStorage.setItem('DosTwo', randomTwo);
}

function myFunction() {
    setInterval(function () {
        randomTree()
    }, 10000);
}
myFunction()

//ESTO ES LO QUE NO FUNCIONA

function comparacionGame() {
    const OneUno = JSON.parse(localStorage.getItem('UnoOne'));
    const OneDos = JSON.parse(localStorage.getItem('UnoDos'));
    const TwoUno = JSON.parse(localStorage.getItem('DosOne'));
    const TwoDos = JSON.parse(localStorage.getItem('DosTwo'));

    console.log(OneUno);
    console.log(OneDos);
    console.log(TwoUno);
    console.log(TwoDos);
    if (OneUno == TwoUno) {
        alert('GANASTE!!')
    } if (OneDos == TwoDos) {
        alert('GANASTE!!')
    }
}
comparacionGame()
window.onkeydown = escape;