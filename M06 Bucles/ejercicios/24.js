function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let palabra = "";
  for(let i = texto.length - 1 ; i >= 0 ; i --) {
palabra += texto [i];
  }
  return palabra;

}
console.log(invertirTexto("facundo"))
module.exports = invertirTexto;