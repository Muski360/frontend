// criar eventos avançados com DOM

// evento para capturar a tecla digitada

document.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada: " + event.key);
});


// função de sugestão de texto
let input = document.createElement("input");
input.type = "text";
input.id = "buscar";
input.placeholder = "Digite para Buscar...";

document.body.appendChild(input);

// lista de sugestão

let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);

let sugestoes = [
  "JavaScript",
  "Java",
  "Python",
  "C#",
  "PHP",
  "Dart",
  "Flutter",
  "Kotlin",
  "Ruby",
  "Go",
  "Rusty",
];

//evento para capturar texto e sugerir do vetor
document.getElementById("buscar").addEventListener("input", () => {
  let texto = input.value.toLowerCase();
  lista.innerHTML = "";
  sugestoes.forEach((sugestao) => {
    if (sugestao.toLowerCase().includes(texto)) {
      let item = document.createElement("li");
      //adicionar item a lista de sugestões
      // porem se item for clicado - Auto Completar
            item.style.cursor = "pointer";
            item.addEventListener("click", () => {
              input.value = sugestao;
              lista.innerHTML = "";
            });
            item.innerText = sugestao;
            lista.appendChild(item);
    }
  });
});