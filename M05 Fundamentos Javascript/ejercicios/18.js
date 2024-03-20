function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  let numero = num;
  return numero % 2 === 1;
}
//Cree una variable para num y la dividi entre 2 para que el resultado sea 1, 
//ya que si esto ocurre es impar, en caso de ser asi retorna true.
module.exports = esImpar;