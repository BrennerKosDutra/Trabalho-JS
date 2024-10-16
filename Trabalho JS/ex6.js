const array1 = [1, 1, 3, 5, 6, 5];

function substituirElemento(array, oldValue, newValue) {
  let newArray = array;

  newArray.forEach((element, index) => {
    if (element == oldValue) {
      newArray[index] = newValue;
    }
  });

  return newArray;
}

console.log(substituirElemento(array1, 5, 50));