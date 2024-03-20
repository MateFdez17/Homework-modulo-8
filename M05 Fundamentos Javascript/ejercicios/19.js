function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  let numero = num;
  let positivo = "Es positivo";
  let negativo = "Es negativo";
  if(numero > 0) {
    return positivo;
  } else if(numero < 0) {
    return negativo;
  } else {
    return false;
  }
}
//Cree dos variables para los textos que el ejercicio quiere que retorne y la variable de num,
//luego utilice un "if" para retornar los textos segun el tipo de numero y en caso contrario false.

module.exports = esPositivo;