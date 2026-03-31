const prompt = require("prompt-sync")();

notas = [];
while (true) {
    let nota = Number(prompt("Insire a nota (digite -1 quando quiser parar): "));
    if (nota < -1 || nota > 10) {
        console.log("Digite um número válido!");
        continue;
    } else if (nota == -1) {
        if (notas.length > 1) {
            console.log("Parando...\n");
            break;
        } else {
            console.log("Você precisa digitar notas válidas!");
            continue;
        }
    } else {
        notas.push(nota)
        continue;
    }
}

let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

let media = soma / notas.length

console.log(`A média das notas (${notas}) é: ${media}`);
