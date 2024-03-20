// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom(num) {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  return Math.round(num)
}
//Está mal planteado.
//Utilice el metodo "Math.round", para redondear al entero mas cercano ya que eso pide el test y el ejercicio esta mal planteado.
//El método Math.round() en JavaScript se utiliza para redondear un número al entero más cercano. Funciona de la siguiente manera:
//Si la parte decimal del número es mayor o igual a 0.5, el número se redondea hacia arriba al entero más cercano.
//Si la parte decimal del número es menor que 0.5, el número se redondea hacia abajo al entero más cercano.
module.exports = numeroRandom;
