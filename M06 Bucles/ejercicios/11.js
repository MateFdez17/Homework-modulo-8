function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if(num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
}

//Estoy usando un if con un "&&" para retornar true en caso de que num sea menor que 50 y mayor que 20.

module.exports = estaEnRango;
