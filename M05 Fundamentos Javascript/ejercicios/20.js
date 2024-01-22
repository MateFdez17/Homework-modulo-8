function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  var word = letra;
  var vocal = "Es vocal";
  var noEsVocal = "Dato incorrecto";
  if(word.length > 1) {
    return noEsVocal;
  } else if(word !="a" && word !="e" && word !="i" && word !="o" && word !="u") {
    return noEsVocal;
  } else {
    return vocal;
  }

}

module.exports = esVocal;
