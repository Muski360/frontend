//Funções de String

const mensagem = " JavaScript é Incrível ";

// contar quantos caracteres tem a variável
console.log(mensagem.length); // 23

//MAIÚSCULAS e minúsculas
console.log(mensagem.toUpperCase); // JAVASCRIPT É INCRÍVEL
console.log(mensagem.toLowerCase); // javascript é incrível

//substituição de partes da String
const mensagem2 = mensagem.replace("Java", "Type");
console.log(mensagem2); // TypeScript é incrível

//partes do texto
console.log(mensagem.substring(0, 5)); //" Java"
console.log(mensagem.slice(-11)); //JavaScript

//Tesoura (trim)
console.log(mensagem.trim()); //remove espaços antes e depois do texto

// Separação de String
const mensagem3 = "Bom Tarde Com Muita Alegria";
const array = mensagem3.split(" "); //usando o espaço para separa a frase e transformar em vetor
console.log(array);

//Desafio

// Converta o Texto: " João, mariA, NicolaS, SocoRRo, zuLeiCa"
// em um Arrya no Seguinte Formato: [João,Maria,Nicolas,Socorro,Zuleica]
