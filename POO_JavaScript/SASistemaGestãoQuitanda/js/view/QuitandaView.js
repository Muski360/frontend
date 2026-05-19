// criação da classe QuitandaView
export default class QuitandaView {
  // Construtor com DOM
  constructor() {
    this.formProduto = document.getElementById("formProduto");
    this.formVenda = document.getElementById("formVenda");
    // Corrigido: guarda a referência do formulário de atualização.
    this.formAtualizar = document.getElementById("formAtualizar");
    this.listaEstoque = document.getElementById("estoque");
    this.listaPorcentagens = document.getElementById("porcentagens");
    this.listaMovimentacoes = document.getElementById("movimentacoes");
  }

  //Função com callback para adicionar e definr o produto. com date.now() para definir horário também.
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

  //Função para definir a venda do produto, que apenas tira sua quantidade.
  bindVenda(handler) {
    this.formVenda.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("produtoVenda").value;
      const quantidade = document.getElementById("quantidadeVenda").value;

      handler(nome, quantidade);
    });
  }

  //Função que atualiza o produto, que faz mudar os valores dos campos
  bindAtualizarProduto(handler) {
    // Corrigido: conecta o formulário de atualizar ao Controller.
    this.formAtualizar.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("atualizaNome").value;
      const categoria = document.getElementById("atualizaCategoria").value;
      const preco = document.getElementById("atualizaPreco").value;
      const quantidade = document.getElementById("atualizaQuantidade").value;

      // Corrigido: envia somente os campos preenchidos para manter os outros dados.
      const dados = {};

      if (categoria.trim() !== "") dados.categoria = categoria;
      // Corrigido: permite atualizar preço para 0, por isso compara com string vazia.
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
    // Corrigido: limpa o formulário de atualização depois de salvar.
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

  renderPorcentagens(categorias) {
    this.listaPorcentagens.innerHTML = "";

    if (categorias.length === 0) {
      this.listaPorcentagens.innerHTML =
        "<li>Nenhuma porcentagem para mostrar.</li>";
      return;
    }

    categorias.forEach((categoria) => {
      const produtos = categoria.produtos
        .map(
          (produto) => `
            <li>
              ${produto.nome} - ${produto.porcentagem.toFixed(2)}% da categoria
              (${produto.quantidade} unidade(s))
            </li>
          `,
        )
        .join("");

      this.listaPorcentagens.innerHTML += `
        <li>
          <strong>${categoria.nome}</strong> -
          ${categoria.porcentagem.toFixed(2)}% do estoque
          (${categoria.quantidade} unidade(s))
          <ul class="sublista">
            ${produtos}
          </ul>
        </li>
      `;
    });
  }

  renderMovimentacoes(movimentacoes) {
    this.listaMovimentacoes.innerHTML = "";

    if (movimentacoes.length === 0) {
      this.listaMovimentacoes.innerHTML =
        "<li>Nenhuma movimentação registrada.</li>";
      return;
    }

    movimentacoes.forEach((movimentacao) => {
      // Corrigido: atualização de preço/categoria não precisa mostrar "null unidade(s)".
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
