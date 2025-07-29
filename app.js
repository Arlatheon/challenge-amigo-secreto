//!El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//?Creamos un array o lista llamado amigos.
let amigos = []

//?Creamos una funcion que al usuario darle click al boton de añadir y la caja este vacia, le salte una alerta de "Por favor, inserte un nombre".
function agregarAmigo(){
    //*Con document.querySelector llamamos a la id:"amigo" de html y le damos un valor, esto lo que hace es obtener el texto escrito por el usuario y almacenarlo en la variable "textoUsuario".
    let textoUsuario = document.querySelector("#amigo").value;
   
    if (textoUsuario == ""){
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(textoUsuario);
        console.log(amigos);
        limpiarCaja();
        listaAmigos();
        limpiarResultado();
    }
}
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}


function limpiarResultado(){
    document.querySelector("#resultado").innerHTML = "";
}


function listaAmigos(){ 
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoElegido = amigos[indiceAleatorio];
    let result = document.querySelector("#resultado");
    result.innerHTML = `El Ganador del Sorteo es: ${amigoElegido}`
    limpiarCaja();

    //Reiniciar el juego:
    amigos = [];  // Vacia el array o lista.
    listaAmigos(); // Actualiza la lista visible.
}