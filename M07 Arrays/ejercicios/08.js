function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
 let numerosPares = [];
 for (let i = 0 ; i < array.length ; i++) {
  if (array[i] % 2 === 0) {
    numerosPares.push(array[i]);
  }
 }
 return numerosPares;
  }
  
//En el ejercicio creamos un array vacio en el que vamos a almacenar los numeros pares del array, 
//luego iteramos sobre el array con un bucle for para verificar los elementos que son numeros par 
//en el caso de ser pares lo agregamos al array vacio con ".push" para luego retornar el array creado para numeros pares  

module.exports = filtrarNumerosPares;
