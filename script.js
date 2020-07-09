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

class Game{
    constructor(){
        this.respuestasCorrectas = 0;
        this.respuestasIncorrectas = 0;
    }
}

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
bandera = document.querySelector(".bandera");
listaDeBotones = document.querySelectorAll("button");


const paisesCopia = [argentina, brasil, chile, uruguay, paraguay, bolivia, colombia, ecuador, guyana, peru, surinam, venezuela, antiguaYBarbuda, trinidadYTobago, panama];


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
    return Math.floor(Math.random()*3);
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

function main(){
    paises = paisesCopia;
    juego = new Game();
    respuesta = generarRespuesta();
    cambiarBanderaYOpciones(paises, respuesta);
    generarEventListeners(respuesta);
}

main();