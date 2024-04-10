function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
    
  // Crear un objeto para llevar un registro de los elementos vistos
    let elementosVistos = {};
  
    // Iterar sobre el array de números
    for (let i = 0; i < numeros.length; i++) {
      // Verificar si el elemento ya está en el objeto
      if (elementosVistos[numeros[i]] !== undefined) {
        // Si está, devolver el elemento repetido
        return numeros[i];
      } else {
        // Si no está, agregarlo al objeto
        elementosVistos[numeros[i]] = true;
      }
    }
  
    // Si no se encontró ningún elemento repetido, devolver undefinded
    return undefined;
  }

  //Primero cree un objeto para llevar registro de los elementos que se vieron, luego itere sobre el array paara verificar si el elemento ya esta en el objeto, 
  //en el caso que este retorno ese elemento repetido y en caso que no lo agrego al objeto, pero en caso que no haya ningun elemento
  //repetido retorno undefined. 
  
module.exports = encontrarElementoRepetido;