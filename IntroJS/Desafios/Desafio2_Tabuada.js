const prompt = require("prompt-sync")();

var num = Number(prompt("Diga um número que vou tacar a tabuada pra você: "));

for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}