function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if(edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
    
  }
}

//Estoy usando un if para retornar que esta permitido el ingreso en caso de ser mayor a 18
//y que no esta permitido en caso de ser menor a 18
module.exports = mayoriaDeEdad;
