// Galeria de imagens dinâmicas -> DOM

const uploadInput = document.querySelector("#upload");
const btnAdd = document.querySelector("#addImage");
const galeria = document.querySelector(".galeria");
const carrossel = document.querySelector(".carrossel");

const imagens = [];
let carrosselInterval = null;
let carrosselIndex = 0;

btnAdd.addEventListener("click", adicionarImagem);
uploadInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    adicionarImagem();
  }
});

function adicionarImagem() {
  const imageURL = uploadInput.value.trim();
  if (imageURL === "") return;

  imagens.push(imageURL);
  uploadInput.value = "";
  atualizarGaleria();
  atualizarCarrossel();
}

function removerImagem(index) {
  imagens.splice(index, 1);

  if (carrosselIndex >= imagens.length) {
    carrosselIndex = 0;
  }

  atualizarGaleria();
  atualizarCarrossel();
}

function atualizarGaleria() {
  galeria.innerHTML = "";

  imagens.forEach((imagem, index) => {
    const div = document.createElement("div");
    div.classList.add("imagemContainer");

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `Imagem adicionada ${index + 1}`;

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.innerText = "X";
    btnRemove.classList.add("remove");
    btnRemove.title = "Remover imagem";
    btnRemove.addEventListener("click", () => removerImagem(index));

    div.appendChild(img);
    div.appendChild(btnRemove);
    galeria.appendChild(div);
  });
}

function atualizarCarrossel() {
  carrossel.innerHTML = "";
  carrossel.style.transform = "translateX(0)";
  carrosselIndex = 0;

  if (carrosselInterval !== null) {
    clearInterval(carrosselInterval);
    carrosselInterval = null;
  }

  if (imagens.length === 0) {
    return;
  }

  imagens.forEach((imagem, index) => {
    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `Carrossel imagem ${index + 1}`;
    carrossel.appendChild(img);
  });

  if (imagens.length === 1) {
    return;
  }

  carrosselInterval = setInterval(() => {
    carrosselIndex = (carrosselIndex + 1) % imagens.length;
    carrossel.style.transform = `translateX(-${carrosselIndex * 100}%)`;
  }, 2000);
}
