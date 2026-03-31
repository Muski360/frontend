const modal = document.getElementById("modal");
const abrirModal = document.getElementById("addBtn");
const fecharModal = document.getElementById("fecharModal");
const cancelarLista = document.getElementById("cancelList");
const criarListaBtn = document.getElementById("createList");
const listNameInput = document.getElementById("listNameInput");
const listError = document.getElementById("listError");
const colorButtons = document.querySelectorAll(".colorBtn");
const listasContainer = document.getElementById("listas");
const painelLista = document.getElementById("painelLista");
const listaSelecionadaTitulo = document.getElementById("listaSelecionadaTitulo");
const guestForm = document.getElementById("guestForm");
const mensagemErro = document.getElementById("mensagemErro");
const convidadosContainer = document.getElementById("convidados");
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

const guestNome = document.getElementById("guestNome");
const guestDocumento = document.getElementById("guestDocumento");
const guestEmail = document.getElementById("guestEmail");
const guestTelefone = document.getElementById("guestTelefone");
const guestEmpresa = document.getElementById("guestEmpresa");

const lists = [];

let corSelecionada = null;
let listaSelecionadaId = null;

function gerarId(prefixo) {
  return `${prefixo}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function abrirModalLista() {
  modal.style.display = "flex";
  listNameInput.focus();
}

function limparFormularioDaLista() {
  listNameInput.value = "";
  corSelecionada = null;
  listError.textContent = "";
}

function fecharModalLista() {
  modal.style.display = "none";
  limparFormularioDaLista();
}

function limparFormularioDePessoa() {
  guestForm.reset();
  mensagemErro.textContent = "";
}

function listarAtual() {
  return lists.find((item) => item.id === listaSelecionadaId) || null;
}

function mostrarErroLista(mensagem) {
  listError.textContent = mensagem;
}

function mostrarErroPessoa(mensagem) {
  mensagemErro.textContent = mensagem;
}

function renderizarListas() {
  listasContainer.innerHTML = "";

  if (lists.length === 0) {
    const vazio = document.createElement("p");
    vazio.textContent = "Nenhuma lista criada ainda.";
    listasContainer.appendChild(vazio);
    return;
  }

  lists.forEach((lista) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card-lista";
    card.style.backgroundColor = lista.cor;
    card.style.color = "#000";
    card.textContent = `${lista.nome} (${lista.convidados.length})`;

    card.addEventListener("click", () => {
      listaSelecionadaId = lista.id;
      painelLista.hidden = false;
      listaSelecionadaTitulo.textContent = `Lista selecionada: ${lista.nome}`;
      mensagemErro.textContent = "";
      renderizarConvidados();
    });

    listasContainer.appendChild(card);
  });
}

function renderizarConvidados() {
  const lista = listarAtual();
  convidadosContainer.innerHTML = "";

  if (!lista) {
    return;
  }

  if (lista.convidados.length === 0) {
    const vazio = document.createElement("p");
    vazio.textContent = "Nenhuma pessoa cadastrada nesta lista.";
    convidadosContainer.appendChild(vazio);
    return;
  }

  lista.convidados.forEach((convidado) => {
    const card = document.createElement("div");
    card.className = "card-convidado";

    const nome = document.createElement("strong");
    nome.textContent = convidado.nome;

    const documento = document.createElement("p");
    documento.textContent = `Documento: ${convidado.documento}`;

    const email = document.createElement("p");
    email.textContent = `E-mail: ${convidado.email}`;

    const telefone = document.createElement("p");
    telefone.textContent = `Telefone: ${convidado.telefone}`;

    const empresa = document.createElement("p");
    empresa.textContent = `Empresa: ${convidado.empresa}`;

    const removerBtn = document.createElement("button");
    removerBtn.type = "button";
    removerBtn.textContent = "Remover";

    removerBtn.addEventListener("click", () => {
      const listaAtual = listarAtual();

      if (!listaAtual) {
        return;
      }

      listaAtual.convidados = listaAtual.convidados.filter(
        (item) => item.id !== convidado.id,
      );

      renderizarListas();
      renderizarConvidados();
    });

    card.appendChild(nome);
    card.appendChild(documento);
    card.appendChild(email);
    card.appendChild(telefone);
    card.appendChild(empresa);
    card.appendChild(removerBtn);
    convidadosContainer.appendChild(card);
  });
}

abrirModal.addEventListener("click", abrirModalLista);
fecharModal.addEventListener("click", fecharModalLista);

cancelarLista.addEventListener("click", () => {
  fecharModalLista();
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModalLista();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal.style.display === "flex") {
      fecharModalLista();
      return;
    }

    limparFormularioDePessoa();
  }
});

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    corSelecionada = button.dataset.color;
    mostrarErroLista("");
  });
});

criarListaBtn.addEventListener("click", () => {
  const nomeLista = listNameInput.value.trim();

  if (!nomeLista) {
    mostrarErroLista("Digite o nome da lista.");
    return;
  }

  if (!corSelecionada) {
    mostrarErroLista("Escolha uma cor para a lista.");
    return;
  }

  const novaLista = {
    id: gerarId("lista"),
    nome: nomeLista,
    cor: corSelecionada,
    convidados: [],
  };

  lists.push(novaLista);
  renderizarListas();
  fecharModalLista();
});

guestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const lista = listarAtual();

  if (!lista) {
    mostrarErroPessoa("Selecione uma lista antes de adicionar pessoas.");
    return;
  }

  const novoConvidado = {
    id: gerarId("convidado"),
    nome: guestNome.value.trim(),
    documento: guestDocumento.value.trim(),
    email: guestEmail.value.trim(),
    telefone: guestTelefone.value.trim(),
    empresa: guestEmpresa.value.trim(),
  };

  const camposVazios = Object.values(novoConvidado).some((valor) => !valor);

  if (camposVazios) {
    mostrarErroPessoa("Preencha os 5 campos obrigatórios.");
    return;
  }

  lista.convidados.push(novoConvidado);
  limparFormularioDePessoa();
  renderizarListas();
  renderizarConvidados();
});

toggleDarkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderizarListas();
