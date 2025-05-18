let listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
function agregarProducto(producto) {
    // Verifica si el producto es una cadena de texto
    if (typeof producto !== 'string') {
        console.error("El producto debe ser una cadena de texto.");
        return;
    }
    // Verifica si el producto no está vacío
    if (producto.trim() === "") {
        console.error("El producto no puede estar vacío.");
        return;
    }
    // Verifica si el producto ya está en la lista
    if (listaDeCompras.includes(producto)) {
        console.error("El producto ya está en la lista.");
        return;
    }
    // Agrega el producto a la lista
    listaDeCompras.push(producto);
    console.log(`Producto "${producto}" agregado a la lista.`);
    
  // TODO: Verifica si el producto ya está en la lista antes de agregarlo
}

// Función para eliminar un producto
function eliminarProducto(producto) {

  // TODO: Encuentra y elimina el producto de la lista
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.error("El producto no está en la lista.");
    }
    // Verifica si el producto no está en la lista
    // Si está, lo elimina y muestra un mensaje de éxito
    // Si no está, muestra un mensaje de error
}

// Función para mostrar la lista completa
function mostrarLista() {
console.log("Lista de Compras:");
  // TODO: Recorre el arreglo y muestra cada producto
    for (let i = 0; i < listaDeCompras.length; i++) {
        console.log(`- ${listaDeCompras[i]}`);
    }
    // Muestra un mensaje si la lista está vacía
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    }
    // Muestra cada producto en la lista
    // Si la lista está vacía, muestra un mensaje
    // indicando que no hay productos
}

// Prueba tus funciones
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo
agregarProducto("") // Este producto no debe agregarse porque está vacío
eliminarProducto("Jugo");  // Este producto no está en la lista
mostrarLista();  // Debería mostrar "Leche" y "Pan"