//declaração de um array
let array = []; //array dinâmico
//tipos de array
let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Chinelo", "Tamanco"];
let arrayMisto = [1, "José", true];

//tamanho de um array (length)
console.log(arrayNumerico.length); //9

// acessar a posição de um array
console.log(arrayTexto[1]); //Chinelo

//adicionar elementos no array
// push / unshift
//no final
arrayTexto.push("Tenis");
console.log(arrayTexto);
//no começo
arrayTexto.unshift("Sandália");
console.log(arrayTexto);
//trocar o valor de um elemento

arrayTexto[2] = "Crocs";
console.log(arrayTexto);
//substitui o elemento da 3º posição [2] por Crocs

//Remover Elementos (Shift / pop)
//no começo
arrayTexto.shift();
console.log(arrayTexto);
//remove do final
arrayTexto.pop();
console.log(arrayTexto);

//laços de repetição

// percorrer um array com for
for (let i = 0; i < arrayNumerico.length; i++) {
  console.log[`indice[${i}]= ${arrayNumerico[i]}`]; //forma moderna de incluir texto``
}

//forEach ( para cada elemento do array) => so pode ser usada em um array

arrayMisto.forEach((e) => {
  console.log(e);
});

//métodos úteis de Arrays

//IndexOf
console.log(arrayNumerico.indexOf(5)); //4
console.log(arrayNumerico.indexOf(10)); //-1(elemento inexistente)
