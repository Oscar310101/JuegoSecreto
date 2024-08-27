
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);// Capturamoe el valor que ingresa el ususario por el text 

    console.log(intentos);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',` Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto el número
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }

    return;
}


function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = ''; // también se puede hacer con el query para hacer con el ID
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ua se sortearon todos los numeros');
    }else {

    // Si el número generado eta incluido en la lista en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) { 
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() { 
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}`); as
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}



function reiniciarJuego() {
        //Limpiar la caja
        limpiarCaja();

        //Indicar  mensaje de intervalo de numero 
        condicionesIniciales(); //

        //Desabilitar el boton de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');





}

condicionesIniciales();


