function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
   // Si el número es menor o igual a 1, no es primo
   if (numero <= 1) {
    return false;
}

// Itera desde 2 hasta la raíz cuadrada del número
for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por algún número entre 2 y su raíz cuadrada, no es primo
    //Math.sqrt() es un método en JavaScript que se utiliza para calcular la raíz cuadrada de un número. 
//La raíz cuadrada de un número es otro número que, cuando se multiplica por sí mismo, da como resultado el número original.
    if (numero % i === 0) {
        return false;
    }
}

// Si no se encontró ningún divisor entre 2 y la raíz cuadrada del número, es primo
return true;
}
//Use ChatGPT para poder comprender mejor la solucion de este ejercicio.
console.log(esNumeroPrimo(11))

module.exports = esNumeroPrimo;

