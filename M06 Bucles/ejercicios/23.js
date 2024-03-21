function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let suma = 0;
  do{
    num += 5;
    suma ++;
   }
   while(suma < 8); 
 
   return num;
}

//Cree una variable para suma con el valor de "0", en la parte de "do" le di un "5" a la suma, 
//y en la parte de "while" puse un limte a la suma de hasta 8 veces
//dado esto retorne el valor final de num

module.exports = doWhile;