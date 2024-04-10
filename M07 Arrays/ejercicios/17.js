function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let resultados = [];

  for (let i = 0 ; i <= 10 ; i++) {
    resultados.push (i * 6);
  }
  return resultados;
}

//Primero cree un array para almacenar los resultados de la tabla del 6, luego itere sobre este mismo para 
//agregarle los resultados de esta, dandole el limite de 10 al bucle y multiplicando todos los elementos del
//1 al 10 por 6, para luego retornar los resultados.
module.exports = tablaDelSeis;
