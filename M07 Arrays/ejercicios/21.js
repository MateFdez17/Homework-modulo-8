function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  
    for (let i = 0; i < secuencia.length; i++) {
      if (secuencia[i] % n === 0) {
        return secuencia[i];
        break; // Ya que hemos encontrado el múltiplo, podemos detener el bucle.
      }
    }
    
  }
  
 //Esta mal el test
 //primero itere sobre la secuencia de numeros, con un if verifique si es multiplo de n y en el caso que si
 //lo sea retorna el numero y con un break corte el bucle.

module.exports = encontrarPrimerMultiploDeN;