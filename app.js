const btnEnviar = document.getElementById("btn-enviar");
const btnMostrar = document.getElementById("btn-mostrar");

function crearProducto() {
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
    // const list = document.getElementById("list");
    // const item = document.createElement("li");

    // // Metodo para agregar un elemento a un nodo padre del HTML
    // list.appendChild(item);

    // Creo un objeto para guardar los datos ingresados por el usuario
    const datosProducto = {
        nombre: nombre.value.toLowerCase(),
        precio: precio.value,
        decription: decription.value.toLowerCase()
    }
    
    // Limpiar campos
    nombre.value = "";
    precio.value = "";
    decription.value = "";

    return datosProducto;
}

async function guardarEnJson(datosProducto) {
    const url = "http://localhost:3000/productos";

    try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosProducto)
    });
    if (!response.ok) throw new Error("Error");

    const data = await response.json();
    console.log(data); 

    } catch (error) {
        console.log("error: ",error);
    }
}

async function mostrarLista () {
    const url = "http://localhost:3000/productos";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error");
    
        const data = await response.json();
        console.log(data); 

        // list.innerHTML = "";

        const list = document.getElementById("list");
        data.forEach(producto =>
            list.innerHTML += `
            <li>
                ${producto.nombre} - $${producto.precio} - ${producto.decription} - id: ${producto.id}
                <button onclick="eliminarProducto('${producto.id}')">Eliminar</button>
            </li>
            `
        )

    } catch (error) {
        console.log("error: ",error);
    }
}

async function eliminarProducto(id) {
    const url = `http://localhost:3000/productos/${id}`;

    try {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Error al eliminar");
        }

        alert("Producto eliminado");

        mostrarLista();

    } catch (error) {
        console.log("error:", error);
    }
}
    // // Agregamos la información del objeto al contenido del item
    // item.textContent = `producto: ${datosProducto.nombre} - precio: $${datosProducto.precio} - ${datosProducto.decription}`;
    
    // // Botón eliminar para cada item
    // const btnEliminar = document.createElement("button");
    // item.appendChild(btnEliminar);
    // btnEliminar.textContent = "Eliminar";
    
    // btnEliminar.addEventListener("click", () => {
    //     let confirmacion = confirm(`Seguro que desea eliminar el producto ${nombre.value}`);
    //     if (!confirmacion){
    //         list.appendChild(item);
    //     }else {
    //         list.removeChild(item);
    //     }
    // });

    
    // // localStorage y visualización de datos por consola
    // document.addEventListener('DOMContentLoaded', () => {
    //     localStorage.setItem("productos", JSON.stringify(guardarEnJson()));
    //     const mostrarNotas = JSON.parse(localStorage.getItem("productos"));
    //     console.log(mostrarNotas);

    
    btnEnviar.addEventListener("click", () => {
    const itemAgregado = crearProducto();
    console.log(itemAgregado);
    guardarEnJson(itemAgregado);

});

    btnMostrar.addEventListener("click", () => {
        mostrarLista();
});

