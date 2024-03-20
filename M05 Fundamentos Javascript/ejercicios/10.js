function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  return fecha instanceof Date && !isNaN(fecha.getTime());
  }
  
  //fecha instanceof Date && !isNaN(fecha.getTime()) verifica si fecha es una instancia de Date 
  //y si esta instancia de fecha es válida, es decir, si no es NaN. Si ambas condiciones son verdaderas,
  //la expresión devuelve true; de lo contrario, devuelve false. Esto es útil para asegurarse de que una 
  //variable que se supone que contiene una fecha realmente lo hace y que no es un valor no válido.
module.exports = esFechaValida;