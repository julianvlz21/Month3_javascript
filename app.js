const btnEnviar = document.getElementById("btn-enviar");



function agregarProducto() {
    let nombre = document.getElementById("nameProduct");
    let precio = document.getElementById("priceProduct");
    let decription = document.getElementById("decriptionProduct");
    
    // Validación de datos
    if (!nombre.value || !precio.value || !decription.value){
        alert ("Dato vacio, ingresa los valores de nuevo");
        return;
    } 
    
    alert (`producto ${nombre.value} agregado con exito`);

    // Creación de li para agregarlo al ul del DOM vacio
    const list = document.getElementById("list");
    const item = document.createElement("li");

    // Metodo para agregar un elemento a un nodo padre del HTML
    list.appendChild(item);
    // item.classList.add("list-item");

    // Creo un objeto para guardar los datos ingresados por el usuario
    const datosProducto = {
            nombre: nombre.value,
            precio: precio.value,
            decription: decription.value
        }
    
    // Agregamos la información del objeto al contenido del item
    item.textContent = `producto: ${datosProducto.nombre} - precio: $${datosProducto.precio} - ${datosProducto.decription}`;
    
    // Botón eliminar para cada item
    const btnEliminar = document.createElement("button");
    item.appendChild(btnEliminar);
    btnEliminar.textContent = "Eliminar";
    
    
    btnEliminar.addEventListener("click", () => {
        let confirmacion = confirm(`Seguro que desea eliminar el producto ${nombre.value}`);
        if (!confirmacion){
            list.appendChild(item);
        }else {
            list.removeChild(item);
            
        }


    });

    // localStorage y visualización de datos por consola
    localStorage.setItem("productos", JSON.stringify(datosProducto));
    const mostrarNotas = JSON.parse(localStorage.getItem("productos"));
    console.log(mostrarNotas);

    // Limpiar campos
    nombre.value = "";
    precio.value = "";
    decription.value = "";

    return datosProducto;
}

async function  mandarDatos() {
    const url = "http://localhost:3000/productos";

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {"Contend-Type": "aplication/json"},
            body: JSON.stringify(datosProducto)
        })
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

btnEnviar.addEventListener("click", () => {
    const itemAgregado = agregarProducto();
    console.log(itemAgregado);
    
});