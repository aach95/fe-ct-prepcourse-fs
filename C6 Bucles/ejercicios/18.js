function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Verifica si alguno de los números es negativo y devuelve 0 si es así
  if (a < 0 || b < 0) {
    return 0;
  }
  // Inicializa una variable para almacenar el producto
  let producto = 1;
  // Multiplica todos los números entre a y b (inclusive)
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  // Retorna el producto
  return producto;
}
module.exports = productoEntreNúmeros;