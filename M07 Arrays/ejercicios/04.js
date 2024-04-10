function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  
  let elementoAleatorio = array[indiceAleatorio];

  return elementoAleatorio;

}

//Math.random() genera un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo). 

//Al multiplicar este número por la longitud del array (array.length), 
//obtenemos un valor en el rango de 0 a la longitud del array, pero sin incluir la longitud misma. 

//Luego, Math.floor() se utiliza para redondear hacia abajo este valor decimal, 
//convirtiéndolo en un índice entero válido para el array. Finalmente, 
//el elemento correspondiente a ese índice se obtiene de array y se almacena en elementoAleatorio.
module.exports = obtenerElementoAleatorio;
