function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
    let arreglo = [];
    let suma = num;
  
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue; // Alcanzado el límite, se pasa a la siguiente iteración sin sumar
      }
      suma += 2;
      arreglo.push(suma);
    }
  
    return arreglo;
  }

  //Empece creando un array para almacenar el nuevo valor de cada iteracion y una variable para la suma que dara este valor anterior,
//luego en un if para usar el continue en caso de que la iteracion este en el valor 5 y luego seguir normalmente 
//con la funcion.
  


module.exports = continueStatement;
