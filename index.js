
// Cree el array de autos con sus atributos, nombre, categoria e imagen para luego crear las tarjetas
const autos = [

    {nombre:"Aston martin Db11", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/aston-martin-db11.png"},
    {nombre:"Audi R8", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/audi-r8.png"},
    {nombre:"Chevrolet Corvette", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/chevrolet-corvette.png"},
    {nombre:"Ford Mustang", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/ford-mustang.png"},
    {nombre:"Mercedes Benz AMG", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/mercedes-benz-amg.png"},
    {nombre:"Porsche 911", categoria:"superdeportivos", img:"assets/premiums-y-superdeportivos/porsche-911.png"},

    //--------- Deportivos -------------
    {nombre:"Audi A3", categoria:"deportivos", img:"assets/nobles-y-deportivos/audi-a3.png"},
    {nombre:"Chevrolet Cruze", categoria:"deportivos", img:"assets/nobles-y-deportivos/chevrolet-cruze.png"},
    {nombre:"Fiat Kronnos", categoria:"deportivos", img:"assets/nobles-y-deportivos/fiat-kronnos.png"},
    {nombre:"Nissan Sentra", categoria:"deportivos", img:"assets/nobles-y-deportivos/nissan-sentra.png"},
    {nombre:"Toyota Corolla", categoria:"deportivos", img:"assets/nobles-y-deportivos/toyota-corolla.png"},
    {nombre:"Volkswagen Golf", categoria:"deportivos", img:"assets/nobles-y-deportivos/volkswagen-golf.png"}
];

/* Cree esta funcion que retorna las tarjetas en html para ser usadas por deportivos y superdeportivos
accediendo a los atributos del array para mostrar la imagen y el nombre del vehiculo*/
function crearTarjetas(auto){
    return`
    <article class="tarjeta">
        <img src="${auto.img}" alt="${auto.nombre}">
        <h3 class="tarj-nombre">${auto.nombre}</h3>
    </article>`;
}

// La funcion mostrarCatalogo renderiza las tarjetas"
function mostrarCatalogo(categoria){
    const contenedor = document.getElementById("catalogo");    //selecciona el id "catalogo"

    contenedor.innerHTML = autos                    // modifica el contenido de la variable "contenedor" quien selecciona al id catalogo
    .filter(auto => auto.categoria === categoria)   // filtra segun la categoria
    .map(auto => crearTarjetas(auto))               //crea un nuevo array con los vehiculos correspondientes a la categoria seleccionada
    .join("")                                       // y los junto con el join
} 
