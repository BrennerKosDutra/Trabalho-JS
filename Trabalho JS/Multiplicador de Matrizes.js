let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
];

let matriz2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

function multiplicarMatrizes(matriz1, matriz2) {
  if (matriz1[0].length !== matriz2.length) {
    throw new Error(
      "O número de colunas da primeira matriz deve corresponder ao número de linhas da segunda."
    );
  }

  let resultado = new Array(matriz1.length)
    .fill(0)
    .map(() => new Array(matriz2[0].length).fill(0));

  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz2[0].length; j++) {
      for (let k = 0; k < matriz1[0].length; k++) {
        resultado[i][j] += matriz1[i][k] * matriz2[k][j];
      }
    }
  }

  return resultado;
}

let resultado = multiplicarMatrizes(matriz1, matriz2);

resultado.forEach((linha) => console.log(linha.join(" ")));
