//!El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//?Creamos un array o lista llamado amigos.
let amigos = []

//?Creamos una funcion que al usuario darle click al boton de añadir y la caja este vacia, le salte una alerta de "Por favor, inserte un nombre".
function agregarAmigo(){
    //*Con document.querySelector llamamos a la id:"amigo" de html y le damos un valor, esto lo que hace es obtener el texto escrito por el usuario y almacenarlo en la variable "textoUsuario".
    let textoUsuario = document.querySelector("#amigo").value;
   //? Creamos un if para que cuando el texto ingresado por el usuario este vacion, le salte una alert "Por favor, iserte un nombre".
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
//? Creamos una funcion para limpiar la caja donde ingresa el texto el usuario:
function limpiarCaja(){
    //*Aca llamamos a la id:"amigo" que  esta  en html con document.querySelector y le damos un valor "" vacio.
    document.querySelector("#amigo").value = "";
}

//* Esta es otra funcion para limpiar el resultado con innerHTML.
function limpiarResultado(){
    document.querySelector("#resultado").innerHTML = "";
}

//? Creamos una funcion listaAmigos que lo llamamos  con document en el elemento HTML
function listaAmigos(){
    //* Aca asigamos a document.querySelector a una variable llamada lista:
    let lista = document.querySelector("#listaAmigos");
    //*Por esta para a la variable lista le agregamos el .innerHTML y lo asigamos a "" vacio.
    lista.innerHTML = "";
    //*Aca creamos un for que recorre el array "amigos", uno por uno.
    for (let i = 0; i < amigos.length; i++){
    //*Aca creamos un nuevo elemento de lista para cada amigo con document.createElement("li").    
        let item = document.createElement("li");
    //*Aca le pones como texto el nombre del amigo.    
        item.textContent = amigos[i];
    //*Aca a la lista o array le agregamos ese <li></li> a la lista HTML.
        lista.appendChild(item);
    }
}

//? Creamos la funcion de sortearAmigos.
function sortearAmigo(){
    //* Creamos un if que verifica si "amigos" esta vacio, si esta vacio salta un alert("No hay amigos para sortear");
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    //* Añadimos a una variable el math.floo y el math.random que multiplica el elemento que hay en el array amigos:
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoElegido = amigos[indiceAleatorio];
    //*Aca al elemento "resultado" lo llamamos con querySelector y lo asigamos a una varible result:
    let result = document.querySelector("#resultado");
    //* A la variable result le añadimos innerHTML y le agisgamos texto y con template literal llamamos al amigoElegido.
    result.innerHTML = `El Ganador del Sorteo es:  ${amigoElegido}`;
    limpiarCaja();

    //!Reiniciar el juego:
    amigos = [];  //! Vacia el array o lista.
    listaAmigos(); //! Actualiza la lista visible.
}