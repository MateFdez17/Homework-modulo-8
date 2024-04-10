function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
//   for(let i = 0; i < array.length; i++) {
//    return array.push(array[i]);
//  }
  // Utilizar map() para duplicar cada elemento del array
  var arrayDuplicado = array.map(function(elemento) {
    return elemento * 2; // Duplicar cada elemento multiplicándolo por 2
  });
  return arrayDuplicado; // Devolver el nuevo array con los elementos duplicados
}


//Esta mal el test.
//En el ejercicio iteramos sobre el array con un bucle for para luego
//duplicar el array con el metodo "array.push()"
module.exports = duplicarElementos;
