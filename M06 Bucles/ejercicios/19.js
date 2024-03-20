function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;
  for(let x = 1 ; x <= n ; x ++) {
    suma = suma + x; 
  } 
  return suma; 
}


module.exports = sumarHastaN;
