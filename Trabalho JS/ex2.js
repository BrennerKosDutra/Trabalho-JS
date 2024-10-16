const pessoas = [
  { nome: "Matheus", idade: 22 },
  { nome: "Farias", idade: 19 },
  { nome: "Brenner", idade: 20 },
  { nome: "Isadora", idade: 19 },
  { nome: "Dalton", idade: 35 },
];

function ordernarPrioridade(personsArray) {
  let sortedArray = personsArray.sort((a, b) => a.idade - b.idade);

  return sortedArray;
}

console.log(ordernarPrioridade(pessoas));