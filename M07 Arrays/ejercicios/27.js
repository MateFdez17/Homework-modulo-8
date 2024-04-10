function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(' ');
}

//Con .join(' ') retorno las palabras concatenadas con un espacio entre ellas en un arreglo.
module.exports = dePalabrasAFrase;
