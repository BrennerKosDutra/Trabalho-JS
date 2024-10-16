const listaNumeros = [4, 4, 4, 4, 7, 7, 7, 2, 2, 1, 1, 2, 5, 6, 6];

function contarOcorrencias(array) {
  const objetoContador = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (objetoContador[element]) {
      objetoContador[element] += 1;
    } else {
      objetoContador[element] = 1;
    }
  }

  return objetoContador;
}

console.log(contarOcorrencias(listaNumeros));