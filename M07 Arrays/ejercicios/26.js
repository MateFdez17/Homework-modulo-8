function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

//Agregue el elemento al comienzo del array y retorne el array(con agregarlo con .unshift automaticamente va al final del arreglo)
module.exports = agregarItemAlComienzoDelArray;
