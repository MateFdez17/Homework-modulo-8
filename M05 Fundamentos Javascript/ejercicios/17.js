function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  let numero = num;
  return numero % 2 === 0;
}
//Cree una variable para num y la dividi entre 2 para que el resultado sea 0, 
//ya que si esto ocurre es par, en caso de ser asi retorna true.


module.exports = esPar;
