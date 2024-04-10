function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;

  for (let i = 0 ; i < arrayOfNums.length ; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
}

//Primero cree una variable para almacenar la suma, luego itere sobre el array para finalizar 
//sumando los elementos y retornando el resultado
module.exports = agregarNumeros;
