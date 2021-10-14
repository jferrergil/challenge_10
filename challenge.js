/* eslint-disable import/prefer-default-export */
export function myPush(arr, cosa) {
  const newArray = [...arr, cosa];
  return newArray;
}

console.log(myPush([1, 2, 3], 4));

//---------------------------------------

export function myFilter(arr, funcion) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (funcion(arr[i])) {
      newArr = myPush(newArr, arr[i]);
    }
  }
  return newArr;
}

//-----------------------------------------------------

console.log(myFilter([1, 2, 3, 4, 5], (e) => e > 2));

//--------------------------------------------------------

export function myFind(valor, funcion) {
  for (let i = 0; i < valor.length; i += 1) {
    if (funcion(valor[i])) {
      return valor[i];
    }
  }
  return undefined;
}

//--------------------------------------------------------

export function myFindInd(valor, funcion) {
  for (let i = 0; i < valor.length; i += 1) {
    if (funcion(valor[i])) {
      return i;
    }
  }
  return -1;
}

//----------------------------------------------------------------

export function mySome(arr, funcion) {
  for (let i = 0; i < arr.length; i += 1) {
    if (funcion(valor[i]));
    return true;
  }
  return false;
}

export function myEvery(arr, funcion) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!funcion(arr[i])) {
      return false;
    }
    return true;
  }
}

// const reducer = (previousValue, currentValue) => previousValue + currentValue

export function myReduce(arr, funcion) {
  let valor = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    valor = funcion(valor, arr[i]);
  }
  return valor;
}
