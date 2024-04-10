function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    } 
    
  }
  return -1;
}
//tuve que iterar sobre el array, para luego comparar el elemnto actual con el buscado y en base a esto retorne el elemento si se encuentra. 
//En el caso de que no se encuentre retorne "-1"


module.exports = encontrarElemento;
