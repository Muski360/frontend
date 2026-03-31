const prompt = require("prompt-sync")();

let numeros = Number(prompt("Digite até qual número você quer: "));
console.log(`Todos os números pares até ${numeros}`);
for (let i = 0; i <= numeros; i += 2) {
  console.log(`${i}`);
}
