function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPedidos = [];

  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesPedidos.push(array[i]);
    }
  }

  if (mesesPedidos.length === 3) {
    return mesesPedidos;
  } else {
    return "No se encontraron los meses pedidos"
  }
  
}


//Primero cree un array para almacenar los meses pedidos, luego itere sobre el array para buscar los tres
//meses que me pide el ejercicio, para meterlos con en el array creado con .push, esto para retornarlos luego en el nuevo array,
//corrobarando que la longitud de mi arreglo sean los tres meses, y para en caso contrario retornar el texto pedido en el ejercicio.

module.exports = mesesDelAño;
