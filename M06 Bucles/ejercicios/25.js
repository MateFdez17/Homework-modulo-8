function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  string = string.replace(/\s/g, "").toLowerCase();

  const stringInvertido = string.split("").reverse().join("");

  return string === stringInvertido;
}
console.log(esPalindromo("La ruta nos aporto otro paso natural"))

//esPalindromo() es una función que toma una cadena de texto como entrada y
//devuelve true si la cadena es un palíndromo, y false en caso contrario.
//Dentro de la función:
//"string.replace(/\s/g, "").toLowerCase()" elimina los espacios en blanco (\s) utilizando 
//una expresión regular global (/g) y convierte toda la cadena a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas.

//"string.split("").reverse().join("")" divide la cadena en un array de caracteres, 
//invierte el orden de los elementos en el array y luego une los caracteres en una cadena nuevamente.

//Finalmente, se compara la cadena original con su versión invertida. Si son iguales, 
//la función devuelve true, lo que indica que la cadena es un palíndromo. De lo contrario, devuelve false.
module.exports = esPalindromo;
