function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    // const words = ...

    const words = text.split(" "); // Dividir el texto en palabras
    

    let longestWord = ""; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Actualizar la palabra más larga
        }
    }
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
            // Actualizar la palabra más larga
            // longestWord = ...;
        // }
    // }

    // TODO: Retornar la palabra más larga encontrada
    // return ...;
    return longestWord; // Retornar la palabra más larga

}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programacion increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"