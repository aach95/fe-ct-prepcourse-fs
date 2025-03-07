function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

   function combine(str1, str2, str3) {
      let resultado = '';
      let indices = [0, 0, 0];
    
      while (indices.some(index => index < str1.length || index < str2.length || index < str3.length)) {
        if (str1[indices[0]]) resultado += str1[indices[0]++];
        if (str2[indices[1]]) resultado += str2[indices[1]++];
        if (str3[indices[2]]) resultado += str3[indices[2]++];
      }
    
      return resultado;
    }
    

}

module.exports = combine;
