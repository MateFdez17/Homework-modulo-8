function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }   

  let min = Math.min (...numeros);
  let max = Math.max(...numeros);

  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }
  return null;
}

//Primero verifico que el array no este vacio, en dicho caso retorno null, luego determino el numero minimo y maximo del array con el metodo MAth.min y Math.max
//luego itere sobre la secuencia completa para verifcar si estan todos los numeros presentes en el array , use el metodo .includes para verificar si le 
//falta a la secuencia un numero para luego devolver el numero faltante. En el caso que no haya numero faltante retorno null.

module.exports = encontrarNumeroFaltante;