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

//Primero cree una variable "suma" con el valor de "0",
//luego utilice bucle "for" para volver la suma de los numeros desde 1 hasta el numero "n"
module.exports = sumarHastaN;
