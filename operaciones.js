/**
 * Esta funcion retorna el numero mayor del array
 * agarrando el primer numero del array y comparandolo
 * hasta encontrar el mayor
 * @param {mayor} arr
 * @returns 
 */
function mayor(arr) {
  let numeroMayor = arr[0];

  arr.forEach((num) => {
    if (num > numeroMayor) {
      numeroMayor = num;
    }
  });

  return numeroMayor;
}

/**
 * Esta funcion retorna el numero menor del array
 * agarrando el primer numero del array y comparandolo
 * hasta encontrar el menor
 * @param {menor} arr 
 * @returns 
 */
function menor(arr) {
  let numeroMenor = arr[0];

  arr.forEach((num) => {
    if (num < numeroMenor) {
      numeroMenor = num;
    }
  });

  return numeroMenor;
}

/**
 * Esta funcion retorna la sumatoria de todos los numeros del array
 * 
 * @param {sumatoria} arr 
 * @returns 
 */
function sumatoria(arr) {
  let suma = 0;
  for(let i = 0; i < arr.length; i++) suma += arr[i];
  
  return suma
}

/**
 * Esta funcion retorna un array con todos sus elementos ordenados (Números).
 * comparar pares de elementos adyacentes. Si el elemento actual es mayor que el siguiente, se intercambian de posición.
 * 
 * @param {listaOrdenada} arr 
 * @returns 
 */
function listaOrdenada(arr) {
  let flag = false;

  do {
    flag = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
  } while (flag);

  return arr;
}

module.exports = { mayor, menor, sumatoria, listaOrdenada }