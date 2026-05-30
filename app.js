const btnEnviar = document.getElementById("btn-enviar");

function agregarProducto() {
    let nombre = document.getElementById("nameProduct");
    let precio = document.getElementById("priceProduct");
    let decription = document.getElementById("decriptionProduct");
    
    if (!nombre.value || !precio.value || !decription.value){
        alert ("Dato vacio, ingresa los valores de nuevo");
    } else {
        alert (`producto ${nombre.value} agregado con exito`);
    }
    
    // nombre.value = "";
    // precio.value = "";
    // decription.value = "";

    
}
btnEnviar.addEventListener("click", agregarProducto);