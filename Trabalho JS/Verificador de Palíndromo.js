function isPalindromo(word) {
  const reversedWord = word.split("").reverse().join("");

  if (reversedWord.toLowerCase() === word.toLowerCase()) {
    console.log(`${word} é um palíndromo`);
    return true;
  } else {
    console.log(`${word} não é um palíndromo`);
    return false;
  }
}

isPalindromo("Radar");
//Verificador de Palíndromo.
