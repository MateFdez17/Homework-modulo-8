function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  const stringOrdenado1 = str1.split("").sort().join("");
  const stringOrdenado2 = str2.split("").sort().join("");

  return stringOrdenado1 === stringOrdenado2;
}

//En este ejemplo, la función esAnagrama() toma dos cadenas de texto como entrada y devuelve true si son anagramas, y false en caso contrario.

//Primero, se eliminan los espacios en blanco y se convierten ambas cadenas a minúsculas.
//Luego, se ordenan los caracteres de ambas cadenas usando "split()" para convertir las cadenas en arrays de caracteres,
//"sort()" para ordenar los caracteres alfabéticamente y "join()" para unir los caracteres nuevamente en cadenas.
//Finalmente, se comparan las cadenas ordenadas. Si son iguales, las cadenas son anagramas; de lo contrario, no lo son.
module.exports = esAnagrama;
