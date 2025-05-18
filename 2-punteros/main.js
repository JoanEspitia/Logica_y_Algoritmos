const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
    //usa un puntero al inicio del arreglo y otreo al siguiente elemento
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        // Si no coinciden, avanza los punteros
        inicio++;
        siguiente++;
    }
//compara las iniciales de los nombres en los punteros
//si coinciden deten la busqueda y devuelve los nombres
//si no coinciden, avanza los punteros y repite


    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]