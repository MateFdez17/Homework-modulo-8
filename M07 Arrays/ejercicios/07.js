function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var resultado = [];
  
  for (var i = 0; i < array.length; i++) {
   
    if (typeof array[i] === "string") {
      resultado.push(array[i].toUpperCase());
    } else {
      resultado.push(array[i]); 
  }
  
  return resultado;
  }

}

//Esta mal el test
//Primero cree un array para almacenar el resultado de los string pasados a mayusculas, luego itere sobre el array para 
//buscar los elementos que son string, para luego convertirlos a mayusculas con .toUpperCase y meterlos en el array 
//creado con .push, y en el caso que no sea string solamente lo agregamos sin modificar para retornar el array creado con los resultados.
module.exports = convertirStringAMayusculas;
