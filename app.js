// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Función para agregar amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Validar que el nombre no contenga números
    if (/\d/.test(nombre)) {
    alert("Escribe el nombre de tu amigo sin números.");
    return;
    }

    // Validar que el nombre no exceda los 30 caracteres
    if (nombre.length > 35) {
    alert("Se sobrepasó la cantidad de caracteres (letras).");
    return;
}
    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}
// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
// Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
}

