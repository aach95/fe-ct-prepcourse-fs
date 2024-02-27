function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:


  // const xmas95 = new Date("1995-12-25T23:15:30");
//const fullYear = xmas95.getFullYear();//

const today = new Date();
const edad = today.getFullYear() - fechaNacimiento.getFullYear()
return edad >=18; 
}

module.exports = esMayorDeEdad;