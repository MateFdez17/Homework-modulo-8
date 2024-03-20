function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código: 

  // while(mes > 0 && mes < 12) {
  // if(mes === 2) {
  //    return 28;
  //   } else if (mes % 2 === 0) {
  //     return 30;
  //   } else {
  //     return 31;
  //   } 
  // }
  // return 0;


//   do {
//     if(mes === 2) {
//     return 28;
//   } else if (mes % 2 === 0 && mes > 0 && mes <= 12) {
//       return 30;
//   } else if (mes % 2 === 1 && mes > 0 && mes <= 12) {
//       return 31;
//   } else {
//     return 0;
//   }
// }
// while(mes > 0 && mes < 12);

do {
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    
      return 31;
  
    case 2:
      
      return 28;

    case 4:
    case 6:
    case 9:
    case 11:

    return 30;

    default:
      
      return 0;
   
  }
}
while(mes > 0 && mes < 12)
  
}

//En ninguno de los tres casos se necesita un do-while.
console.log(diasEnMes(12))

module.exports = diasEnMes;
