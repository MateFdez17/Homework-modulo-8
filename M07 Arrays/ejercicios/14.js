function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  }

  else if (arguments.length === 1) {
    return arguments[0];
  }

  else {
    let producto = 1;
    for (let i = 0 ; i < arguments.length ; i++) {
      producto *= arguments[i];
    }
    return producto;
  }
  
}

//Primero chequee el caso en el que no hayan argumentos, despues el caso en el que haya 1 argumento
//y por ultimo el caso en el que el que haya mas de uno, en este ultimo caso los tuve que multiplicar entre si
//para sacar el producto  


module.exports = multiplicarArgumentos;
