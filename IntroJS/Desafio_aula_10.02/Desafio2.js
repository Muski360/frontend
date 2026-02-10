const notas = [7.5, 8.0, 4.5, 9.0, 3.5, 6.0];

const notasAprovadas = notas.filter((notas) => notas >= 6);
console.log("As notas aprovadas são: " + notasAprovadas);

const somaNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
const media = somaNotas / 6;
console.log("\nA média é: " + media + "\n");

const maior = Math.max(...notas)

const menor = Math.min(...notas)

console.log("Maior nota: " + maior + "\nMenor nota: " + menor);