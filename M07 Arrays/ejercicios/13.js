function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código: 
let suma = 0;
let promedio = 0;
  for (let i = 0 ; i < resultadosTest.length ; i++ ) {
    suma += resultadosTest[i];
  }
  promedio = suma / resultadosTest.length;

  return promedio;
}

//Primero cree una variable para la suma de todos los elementos del array y una para el promedio de estos, itere sobre el array para sumarlos
//para luego dividir el resultado de esta suma por la cantidad de elementos y asi retornar el promedio de todos estos
module.exports = promedioResultadosTest;
