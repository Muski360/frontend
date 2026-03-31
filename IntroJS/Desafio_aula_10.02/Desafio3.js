const notasAlunos = [
  [8, 7, 9],
  [4, 5, 6],
  [9, 10, 9],
];

for (let i = 0; i < notasAlunos.length; i++) {
  let soma = 0;
                                                                                                                                                                                                                                  
  for (let j = 0; j < notasAlunos[i].length; j++) {
    soma += notasAlunos[i][j];
  }

  const media = soma / notasAlunos[i].length;
  console.log(`Aluno ${i + 1} média: ${media}`);
}
