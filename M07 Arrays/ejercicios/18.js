function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
 
    let arreglo = [];
    let suma = num;
  
    for (let i = 0; i < 10; i++) {
      suma += 2;
      arreglo.push(suma);
      if (suma === i + 1) {
        return "Se interrumpió la ejecución";
        break;
        // No necesitas este break, ya que el return termina la ejecución de la función
      }
    }
  
    return arreglo;
  }
  
//Empece creando un array para almacenar el nuevo valor de cada iteracion y una variable para la suma que dara este valor anterior,
//luego en un if comparo si el valor de la suma y la cantidad de iteraciones coinciden, en este caso utilizo el break para cortar el bucle
//y poner el texto pedido en el ejercicio 
module.exports = breakStatement;
