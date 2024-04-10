function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let resultado = [];

  for (let i = 0  ; i < array.length ; i++) {
    resultado.push(array[i] * i);
  }
  return resultado;
}

//Cree un array para almacenar los resultados, luego itere sobre el array de la funcion,
//luego con "resultado.push(array[i] * i);" multiplique cada elemento del array por su propio indice, 
//por ultimo retorne el resultado.
module.exports = multiplicarElementosPorIndice;
