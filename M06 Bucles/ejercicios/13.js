function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  if(num = Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}

//Estoy usando un if con el metodo "Number.isInteger()" para retornar "true" en caso 
//de que num sea un numero entero 
module.exports = esEntero;
