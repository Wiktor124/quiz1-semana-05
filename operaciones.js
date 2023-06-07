/**
 * Esta funcion retorna el numero mayor
 * @param {mayor} function 
 * @returns 
 */
function mayor (arr) {
  let numeroMayor = arr[0]

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > numeroMayor) {
      numeroMayor = arr[i]
    }
  }
  
  return numeroMayor
}

/**
 * Esta funcion retorna el numero menor
 * @param {menor} function 
 * @returns 
 */
function menor (arr) {
  let numeroMenor = arr[0]

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < numeroMenor) {
      numeroMenor = arr[i]
    }
  }
  
  return numeroMenor
}

function sumatoria(arr) {
  let suma = 0;
  for(let i = 0; i < arr.length; i++) suma += arr[i];
  
  return suma
}

function listaOrdenada(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}




module.exports = { mayor, menor, sumatoria }