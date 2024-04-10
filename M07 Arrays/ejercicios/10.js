function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = array[0];
  let indiceMayor = 0;

  for (let i =1 ; i < array.length ; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

//En la primera parte del codigo creo una variable con el primer elemento del array y otra para el indice de este elemento.
//luego itere con un bucle for desde el segundo elemento
//Con las siguientes lineas de codigo lo que hice fue comparar en cada iteracion el valor actual del array
//con el de la variable creada para insertar el valor en la variable "indiceMayor",
//para finalmente despues de comparar todos los elemntos del array retornar el de indice mayor
module.exports = encontrarIndiceMayor;
