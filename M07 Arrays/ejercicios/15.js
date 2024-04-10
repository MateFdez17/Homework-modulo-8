function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
if (array.length === 0) {
  return true;
}

let primerElemento = array[0];

for (let i = 1 ; i < array.length ; i++) {
  if (array[i] !== primerElemento) {
    return false;
  }
}
return true;
}

//Primero corrobore que el array no tenga 0 elementos, en dicho caso es true porque al no haber elementos no hay diferentes,
//Luego almacene en una variable el primer elemento del array para compararlo con los otros en el bucle for con el que 
//continue el ejercicio, en caso de encontrar algun elemento diferente retorna false, caso contrario retorna true. 

module.exports = todosIguales;
