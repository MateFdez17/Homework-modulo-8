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

module.exports = sumarHastaNConBreak;