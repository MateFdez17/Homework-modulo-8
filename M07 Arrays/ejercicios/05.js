function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 5) {
        return array[i];
      }
    }
    return null;
  }


//Esta mal el test
//En el ejercicio iteramos sobre el array con un bucle for para luego verificar 
//si el elemento es un string y tiene mas de 5 caracteres, luego returno el string largo.
module.exports = obtenerPrimerStringLargo;
