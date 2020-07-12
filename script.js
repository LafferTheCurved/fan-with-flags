class Country{
    constructor(codigo, nombre){
        this.codigo = codigo;
        this.nombre = nombre;
    }

    getLink(){
        return `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${this.codigo}.png`;
    }

    getNombre(){
        return this.nombre;
    }

}

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// PAISES
argentina = new Country("ar", "Argentina");
brasil = new Country("br", "Brasil");
chile = new Country("cl", "Chile");
uruguay = new Country("uy", "Uruguay");
paraguay = new Country("py", "Paraguay");
bolivia = new Country("bo", "Bolivia");
colombia = new Country("co", "Colombia");
ecuador = new Country("ec", "Ecuador");
guyana = new Country("gy", "Guyana");
peru = new Country("pe", "Peru");
surinam = new Country("sr", "Surinam");
venezuela = new Country("ve", "Venezuela");
antiguaYBarbuda = new Country("ag", "Antigua y Barbuda");
trinidadYTobago = new Country("tt", "Trinidad y Tobago");
panama = new Country("pa", "Panama");

// DOM
let bandera = document.querySelector(".bandera");
let listaDeBotones = document.querySelectorAll(".optionBoton");
let contadorCorrectas = document.querySelector(".correctas");
let contadorIncorrectas = document.querySelector(".incorrectas");
let botonReiniciar = document.querySelector(".reiniciar");
let finJuego = document.querySelector(".findeljuego");
let porcentajeResultados = document.querySelector(".porcentaje");
let respuestaCorrecta;
const paises = [argentina, brasil, chile, uruguay, paraguay, bolivia, colombia, ecuador, guyana, peru, surinam, venezuela, antiguaYBarbuda, trinidadYTobago, panama];
let paisesCopia = paises;



// EVENT LISTENERS
botonReiniciar.addEventListener("click", () => {
    location.reload();
}); 

// FUNCIONES
function cambiarBandera(pais){
    bandera.innerHTML = `<img src="${pais.getLink()}" alt=""></img>`;
}

function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function generarOpciones(array){
    array = shuffle(array);
    return array.slice(0,4);
}

function generarRespuesta(){
    return Math.floor(Math.random()*4);
}

function cambiarOpciones(opciones) {
   for(let i = 0; i < listaDeBotones.length; i++){
       listaDeBotones[i].textContent = opciones[i].nombre;
   }
}

function cambiarBanderaYOpciones(paises, respuesta){
    opciones = generarOpciones(paises);
    cambiarOpciones(opciones);
    cambiarBandera(opciones[respuesta]);
}

function eliminarEventListeners(){
    listaDeBotones.forEach(boton => {
        boton.removeEventListener("click", eventListener);
        
    });
}

function generarEventListeners(respuesta){
    listaDeBotones.forEach(boton => {
        boton.addEventListener("click", eventListener);
    });
}

function eventListener(e){
    if(e.target.textContent === listaDeBotones[respuestaCorrecta].textContent){
        e.target.style.backgroundColor = "rgb(48, 155, 27)";
        respuestasCorrectas += 1;
        contadorCorrectas.textContent = parseInt(respuestasCorrectas);
    }else{
        e.target.style.backgroundColor = "rgb(221, 26, 26)";
        listaDeBotones[respuestaCorrecta].style.backgroundColor = "rgb(48, 155, 27)";
        respuestasIncorrectas += 1;
        contadorIncorrectas.textContent = parseInt(respuestasIncorrectas);
    }
    eliminarEventListeners();

    setTimeout(function () {
        nuevaPregunta();
    }, 750);
}

function nuevaPregunta(){
    if(respuestasCorrectas+respuestasIncorrectas === 10){
        mostrarResultados();
    }
    listaDeBotones.forEach(boton => {
        boton.style.backgroundColor = "#5f5f5f";
    });
    respuestaCorrecta = generarRespuesta();
    cambiarBanderaYOpciones(paisesCopia, respuestaCorrecta);
    generarEventListeners(respuestaCorrecta);
    paisesCopia.splice(respuestaCorrecta, 1);   
}

function mostrarResultados(){
    finJuego.style.display = "flex";
    porcentajeResultados.textContent = `${respuestasCorrectas}0%`;
}

function main(){
    nuevaPregunta();
}

main();


