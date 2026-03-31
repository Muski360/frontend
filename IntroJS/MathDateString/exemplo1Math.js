const prompt = require("prompt-sync")();

//funções Matemáticas (Math) -> Nativas

// SQRT e POW (Quadrado e Potência)

//calcular a raiz quadrada de 25
console.log(Math.sqrt(25)); //5

//Potência de nº pelo Outro
console.log(Math.pow(7, 2)); //7² = 49
console.log(Math.pow(4, 3)); //4³ = 64
console.log(Math.pow(27, 1 / 3)); //³ raiz 27 = 3

//Funções de Arredondamento (round, ceil, floor)
console.log(Math.round(4.7)); //5
console.log(Math.round(4.4)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.7)); //4

//FUnções Número Aleatório (MAth.random)
console.log(Math.random()); //gerar um nº aleatório entre 0 e 1
//gerar um nº entre 0 e 1000
console.log(Math.random() * 1000);

//Números Absolutos ( converte negativo em Positivo) (Math.abs)
console.log(Math.abs(-10)); //10

// Funções Analíticas Mínimo e Máximo (Math.min Math.max)
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9)); //1
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9)); //9

//Desafio

//Criar um Jogo de de Nº Aleatório
const numSort = Math.round(Math.random() * 1000000);
var tentativas = 0;
console.log("Digite um número de 0 a 100: ");
while (true) {
    numero = Number(prompt("Digite o número (1 - 100): "));
    tentativas++;
    if (numero > numSort) {
        console.log("O número sorteado é menor.")
    } else {
        console.log("O número sorteado é maior")
    }
    if (numero === numSort) {
        break;
    }
}
console.log("Você acertou com tentativas: " + tentativas);