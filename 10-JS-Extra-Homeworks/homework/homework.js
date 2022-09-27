// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];

  // key = propiedad = calve
  for(var key in objeto){
   matriz.push([key,objeto[key]])
  }
    return matriz
  }
  
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cantCaracteres = {};
  for (var i = 0;  i < string.length; i++) {
    if(cantCaracteres.hasOwnProperty(string[i])){
      cantCaracteres[string[i]]++;
    } else {
      cantCaracteres[string[i]] = 1;
    }

  }
  return cantCaracteres;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusc = "";
  var minusc = "";
  for(var i = 0; i < s.length; i++) {
     if(s[i] === s[i].toUpperCase()){
      mayusc += s[i];
  } else {
    minusc += s[i];
  }

};
return mayusc + minusc;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase = str;
  console.log(frase);

  var frasePorPalabras = frase.split(" ");
  console.log(frasePorPalabras);

  var fraseADevolver = [];

for(var i = 0; i < frasePorPalabras.length; i++) {
  var palabra = frasePorPalabras[i];
  var palabraSeparada = palabra.split("");
  console.log("palabraSeparada",palabraSeparada);

  var palabraRevertida = palabraSeparada.reverse();
  console.log("palabraRevertida",palabraRevertida);

  var palabraUnida = palabraRevertida.join("");
  console.log(palabraUnida);

  fraseADevolver.push(palabraUnida);
}
console.log(fraseADevolver);

return fraseADevolver.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroStr = numero.toString();
  var espejo = "";
   for (let i = numeroStr.length-1; i >= 0; i--) {
     espejo += numeroStr[i];      
  }
if(numeroStr === espejo) return "Es capicua";
return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
let nuevaCadena = "";
for(let letra of  cadena) {
  if(letra != "a"&& letra != "b" && letra != "c" ) {
    nuevaCadena += letra
  }
}
return nuevaCadena;


  console.log(deleteAbc("abcefgh"));
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function (a, b) {
    return a.length - b.length;
  }) ;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let nuveoarray = [];
  for( let e of arreglo1) {
     for(let i of arreglo2){
        if(e === i) {
         nuveoarray.push(e);
        }
       }
  }
 
return nuveoarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

