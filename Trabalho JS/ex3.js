const numeros = [5, 10, 12, 14, 16, 21, 23, 26, 27, 39, 40];

function separarParesImpares(array) {
  let object = {
    numerosPares: [],
    numerosImpares: [],
  };

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 == 0) {
      object.numerosPares.push(element);
    } else {
      object.numerosImpares.push(element);
    }
  }

  return object;
}

console.log(separarParesImpares(numeros));

//Esse código separa os números do array em dois grupos: pares e ímpares, e retorna um objeto com essas duas listas.
