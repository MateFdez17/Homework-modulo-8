function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  let string1 = str1;
  let string2 = str2;

  return string1.length === string2.length;
}
// Cree una variable para "str1" y "str2" para poder usar el metodo "length" en ellos.
//Luego utilice este metodo y compare el largo de los dos strings
//El metodo "length" sirve para identificar la longitud de un "string"
module.exports = tienenMismaLongitud;