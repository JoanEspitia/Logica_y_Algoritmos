//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Función para filtrar productos menores de 100
function filtrarPorPrecio(precio){
return productos.filter(productos => productos.precio < 100);
}
console.log(filtrarPorPrecio(100));

//funcion para ordenar los productos alfabeticamente por su nombre
function ordenarPorNombbre(){
    return productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
console.log(ordenarPorNombbre());

//funcion para generar un nuevo arreglo con los nombres de los productos
function obtenerNombres(){
    return productos.map(productos => productos.nombre);
}
console.log(obtenerNombres());

//funcion con reduce para calcular el precio total de los productos
function calcularPrecioTotal(){
    return productos.reduce((total, productos) => total + productos.precio, 0);
}
console.log(calcularPrecioTotal());

hackertank = "https://www.hackertank.com/";
leetcode = "https://leetcode.com/";