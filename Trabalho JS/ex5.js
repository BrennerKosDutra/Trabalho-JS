var minhaMatriz = [
  [2, 4, 6],
  [1, 3, 5],
  [5, 5, 5],
];

function somarMatriz(matrice) {
  return matrice.flatMap((row) => row).reduce((acc, curr) => acc + curr, 0);
}

console.log(somarMatriz(minhaMatriz));