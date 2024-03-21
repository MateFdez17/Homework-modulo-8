function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x > y) {
    return x;
  } else {
    return y;
  }
}

//Estoy usando un if para retornar "x" o "y" en casa de que uno sea mayor al otro
module.exports = obtenerMayor;
