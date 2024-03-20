function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b(inclusive).
  // Tu código:
  var producto = 1;
  if(a === b) {
    return a;
  } else {
    for(let x = a ; x <= b ; x ++) {
      producto = producto * x;
      
    } 
   return producto;
  }
}
productoEntreNúmeros(2, 4);
module.exports = productoEntreNúmeros;