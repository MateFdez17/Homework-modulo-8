function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

    let contadorPares = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        contadorPares++;
      } else {
        continue;
      }
    }
    return contadorPares;
  }
  
//En la funcion empece crendo un contador para los numeros pares, luego itere sobre el array de los numeros para luego verificar si los numeros son
//pares y en el caso que esto se cumple hacer que el contador de los pares sume un numero, y en caso contrario uso un continue para saltar ese numero 
//y no sumar, por ultimo retorne el resultado del contador.
module.exports = contarParesConContinue;
