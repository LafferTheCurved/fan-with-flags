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

bandera = document.querySelector(".bandera");

function cambiarBandera(pais){
    bandera.innerHTML = `<img src="${pais.getLink()}" alt=""></img>`;
}

cambiarBandera(panama);
