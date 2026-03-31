// Mostrar Modal para criar uma nova lista

const modal = document.getElementById("modal");
const abrirModal = document.getElementById("addBtn");
const fecharModal = document.getElementById("fecharModal");

const lists = [];

abrirModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});


//Fluxo -> guardar nome e cor -> criar lista

const colors = document.querySelectorAll(".colorBtn")

let corSelecionada = null;
colors.forEach(Color => {
    Color.addEventListener('click', () => {
        corSelecionada = Color.id;
    })
});

let ListName = "";
document.getElementById("createList").addEventListener("click", () => {
    ListName = document.getElementById("ListName").value;
    if (ListName == "" || corSelecionada == null) return;
    lists.push({ nome: ListName, cor: corSelecionada });

    exibirLista();
})



// Botão Cancelar
document.getElementById("cancelList").addEventListener("click", () => {
  ListName = "";
  corSelecionada = null;
  modal.style.display = "none";
});


function exibirLista() {
    const listasHTML = document.getElementById("listas")
    listasHTML.innerHTML = "";

    lists.forEach(e => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(botao.id)
    }); 
}