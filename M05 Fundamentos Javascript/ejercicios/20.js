function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let word = letra;
  let vocal = "Es vocal";
  let noEsVocal = "Dato incorrecto";
  if(word.length > 1) {
    return noEsVocal;
  } else if(word !="a" && word !="e" && word !="i" && word !="o" && word !="u") {
    return noEsVocal;
  } else {
    return vocal;
  }

}

//Cree dos variables para los textos que el ejercicio quiere que retorne y la variable de letra para poder utilizar el metodo "length",
//luego utilice un "if" para retornar los textos segun el tipo de letra y en caso de que el largo sea diferente retorna "Dato incorrecto".
//para verificar que sea o no sea vocal tuve que usar un el metodo "&&".
module.exports = esVocal;
