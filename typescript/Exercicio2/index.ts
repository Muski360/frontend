interface Estudante {
    nome: String;
    notas: number[];
}

function calcularMedia(e: Estudante) {
    let media: number = e.notas.reduce((acc, cur) => acc + cur, 0) / e.notas.length;
    if (media > 7) {
        console.log("Aluno aprovado!");
        console.log(`NOTA FINAL: ${media}`);
        console.log("===========================");
    } else {
        console.log("Aluno reprovado!");
        console.log(`NOTA FINAL: ${media}`);
        console.log("===========================");
    }
}

const estudantes: Estudante[] = [
    {
        nome: "Murilo",
        notas: [10, 3, 5, 1]
    },
    {
        nome: "Lorenzo",
        notas: [1, 3, 1, 1]
    },
    {
        nome: "Kaio",
        notas: [10, 10, 10, 7]
    }
]

estudantes.forEach(estudantes => {
    calcularMedia(estudantes);
});