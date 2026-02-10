const prompt = require("prompt-sync")();

var continuar = true;
while (continuar) {
  var idade = Number(prompt("Qual é sua idade? "));

  if (idade <= 0 || idade >= 120) {
    console.log("Ei, insira uma idade válida!");
    continue;
  }
  if (idade < 18) {
    console.log("Menor de idade!");
    break;
  } else if (idade >= 18 && idade < 60) {
    console.log("Adulto!");
    break;
  } else {
    console.log("Idoso.");
    break;
  }
}