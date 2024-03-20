function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let fecha = new Date();
  let anioNacimiento = new Date(fechaNacimiento);

  return fecha.getFullYear() - anioNacimiento.getFullYear() >= 18;
}

//let fecha = new Date();: Esto crea un nuevo objeto Date llamado fecha, que representa la fecha y hora actuales.
//let anioNacimiento = new Date(fechaNacimiento);: Aquí, se crea un nuevo objeto Date 
//llamado anioNacimiento utilizando la variable fechaNacimiento. Presumiblemente, fechaNacimiento 
//es una cadena de texto que representa la fecha de nacimiento de una persona. 
//Al pasar esta cadena de texto al constructor de Date, se convierte en un objeto Date. 
//Es importante destacar que fechaNacimiento debe estar en un formato que Date pueda interpretar adecuadamente.
//return fecha.getFullYear() - anioNacimiento.getFullYear() >= 18;: 
//Esta línea calcula la diferencia entre el año actual (obtenido de fecha) 
//y el año de nacimiento (obtenido de anioNacimiento). Luego, compara esta diferencia con 18 para determinar si 
//la persona tiene al menos 18 años. La función getFullYear() devuelve el año de un objeto Date. Si la diferencia de años es 
//igual o mayor a 18, la expresión devuelve true, lo que significa que la persona tiene al menos 18 años; de lo contrario, devuelve false.
//En resumen, este código utiliza objetos Date para calcular la edad de una persona en función de su fecha de nacimiento 
//y luego verifica si esa edad es igual o mayor a 18 años.
module.exports = esMayorDeEdad;