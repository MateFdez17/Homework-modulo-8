function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b(inclusive).
  // Tu código:
  let producto = 1;
  if(a === b) {
    return a;
  } else {
    for(let x = a ; x <= b ; x ++) {
      producto = producto * x;
      
    } 
   return producto;
  }
}

//Cree una variable para producto con valor "1", para luego crear un "if" en el cual voy a crear un bucle "for" para 
//poder identificar el producto de todos los numeros entre "a" y "b" y retornarlo.

module.exports = productoEntreNúmeros;