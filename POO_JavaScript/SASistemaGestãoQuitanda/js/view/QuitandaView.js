export default class QuitandaView {
  constructor() {
    this.formProduto = document.getElementById("formProduto");
    this.formVenda = document.getElementById("formVenda");
    // Corrigido: guarda a referencia do formulario de atualizacao.
    this.formAtualizar = document.getElementById("formAtualizar");
    this.listaEstoque = document.getElementById("estoque");
    this.listaMovimentacoes = document.getElementById("movimentacoes");
  }

  bindAddProduto(handler) {
    this.formProduto.addEventListener("submit", (e) => {
      e.preventDefault();

      const produto = {
        id: Date.now(),
        nome: document.getElementById("nome").value,
        categoria: document.getElementById("categoria").value,
        preco: document.getElementById("preco").value,
        quantidade: document.getElementById("quantidade").value,
      };

      handler(produto);
    });
  }

  bindVenda(handler) {
    this.formVenda.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("produtoVenda").value;
      const quantidade = document.getElementById("quantidadeVenda").value;

      handler(nome, quantidade);
    });
  }

  bindAtualizarProduto(handler) {
    // Corrigido: conecta o formulario de atualizar ao Controller.
    this.formAtualizar.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("atualizaNome").value;
      const categoria = document.getElementById("atualizaCategoria").value;
      const preco = document.getElementById("atualizaPreco").value;
      const quantidade = document.getElementById("atualizaQuantidade").value;

      // Corrigido: envia somente os campos preenchidos para manter os outros dados.
      const dados = {};

      if (categoria.trim() !== "") dados.categoria = categoria;
      // Corrigido: permite atualizar preco para 0, por isso compara com string vazia.
      if (preco !== "") dados.preco = preco;
      // Corrigido: permite atualizar quantidade para 0, por isso compara com string vazia.
      if (quantidade !== "") dados.quantidade = quantidade;

      handler(nome, dados);
    });
  }

  limparFormularioProduto() {
    this.formProduto.reset();
  }

  limparFormularioVenda() {
    this.formVenda.reset();
  }

  limparFormularioAtualizar() {
    // Corrigido: limpa o formulario de atualizacao depois de salvar.
    this.formAtualizar.reset();
  }

  renderEstoque(produtos) {
    this.listaEstoque.innerHTML = "";

    if (produtos.length === 0) {
      this.listaEstoque.innerHTML = "<li>Nenhum produto cadastrado.</li>";
      return;
    }

    produtos.forEach((produto) => {
      this.listaEstoque.innerHTML += `
        <li>
          <strong>${produto.nome}</strong> -
          ${produto.categoria} -
          R$ ${produto.preco.toFixed(2)} -
          ${produto.quantidade} unidades
        </li>
      `;
    });
  }

  renderMovimentacoes(movimentacoes) {
    this.listaMovimentacoes.innerHTML = "";

    if (movimentacoes.length === 0) {
      this.listaMovimentacoes.innerHTML =
        "<li>Nenhuma movimentacao registrada.</li>";
      return;
    }

    movimentacoes.forEach((movimentacao) => {
      // Corrigido: atualizacao de preco/categoria nao precisa mostrar "null unidade(s)".
      const quantidade =
        movimentacao.quantidade === null
          ? "dados alterados"
          : `${movimentacao.quantidade} unidade(s)`;

      this.listaMovimentacoes.innerHTML += `
        <li>
          <strong>${movimentacao.tipo}</strong> -
          ${movimentacao.nome} -
          ${quantidade}
        </li>
      `;
    });
  }
}
