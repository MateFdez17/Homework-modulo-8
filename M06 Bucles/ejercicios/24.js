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

//let palabra = "";: Aquí se declara una variable llamada "palabra" y se inicializa como una cadena vacía. 
//Esta variable se utilizará para almacenar la cadena de texto invertida.

//"for(let i = texto.length - 1 ; i >= 0 ; i--) {: Aquí se inicia un bucle "for" que iterará sobre 
//los caracteres de la cadena de texto original "texto", comenzando desde el último carácter 
//(es decir, desde "texto.length - 1", ya que las posiciones en una cadena de texto comienzan desde 0) hasta el primer carácter (0). 
//Se decrementa "i" en cada iteración.

//palabra += texto[i];: Dentro del bucle, se accede al carácter en la posición "i" de la cadena 
//de texto original "texto" y se concatena (añade) a la cadena "palabra". 
//Esto es lo que invierte la cadena de texto original: se van añadiendo los caracteres en orden inverso.

//Retorna la variable "palabra" que contiene el "texto" invertido gracias al bucle "for".
module.exports = invertirTexto;