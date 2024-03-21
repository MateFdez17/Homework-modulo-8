function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for (let x = 1 ; x <= n ; x ++){
    if(x > 100) {
      break;
    } else {
      suma = suma + x;
  }
}
return suma;
}
//La letra y los tests no coinciden. Tuve que corregir el test una vez más.

//Primero cree una variable "suma" con el valor de "0",
//luego utilice bucle "for" para volver la suma de los numeros desde 1 hasta el numero "n",
//pero en caso de que la suma supere el numero 100 el bucle se corta automaticamente con un "break"

module.exports = sumarHastaNConBreak;