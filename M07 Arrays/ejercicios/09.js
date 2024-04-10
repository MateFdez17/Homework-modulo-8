function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 let contador = 0;

 for ( let i = 0 ; i < array.length; i++) {
  if (array[i] > 10) {
    contador++;
  }
 }
 return contador;
    }

// Primero inicializamos un contador, seguido a esto iteramos sobre el array, 
//para luego verificar si el elemento actual es mayor a 10, dado este caso  el contador
//va a incrementar en 1, por ultimo retorno el contador

module.exports = contarElementosMayoresA10;
