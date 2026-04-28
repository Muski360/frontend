export class Produto {
  constructor(id, nome, categoria, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

export class QuitandaModel {
  constructor() {
    this.produtos = [];
    this.movimentacoes = [];
  }

  addProduto(dados) {
    const produto = this.validarProduto(dados);

    const existe = this.produtos.find(
      (p) => p.nome.toLowerCase() === produto.nome.toLowerCase(),
    );

    if (existe) {
      throw new Error("Produto ja existe");
    }

    this.produtos.push(produto);
    this.registrarMovimentacao("ENTRADA", produto, produto.quantidade);
  }

  atualizarProduto(nome, dados) {
    // Corrigido: busca o produto ignorando espacos e diferenca entre maiusculas/minusculas.
    const nomeBusca = String(nome).trim().toLowerCase();
    const produto = this.produtos.find(
      (p) => p.nome.toLowerCase() === nomeBusca,
    );

    if (!produto) {
      throw new Error("Produto nao encontrado");
    }

    const quantidadeAnterior = produto.quantidade;
    const dadosAtualizados = this.validarProduto({
      ...produto,
      ...dados,
      id: produto.id,
    });

    Object.assign(produto, dadosAtualizados);

    // Corrigido: toda atualizacao agora entra no historico de movimentacoes.
    const diferencaQuantidade = produto.quantidade - quantidadeAnterior;

    if (diferencaQuantidade > 0) {
      this.registrarMovimentacao("ENTRADA", produto, diferencaQuantidade);
    } else if (diferencaQuantidade < 0) {
      this.registrarMovimentacao("SAIDA", produto, Math.abs(diferencaQuantidade));
    } else {
      this.registrarMovimentacao("ATUALIZACAO", produto);
    }
  }

  venderProduto(nome, quantidade) {
    const produto = this.produtos.find(
      (p) => p.nome.toLowerCase() === String(nome).trim().toLowerCase(),
    );
    const quantidadeVenda = Number(quantidade);

    if (!produto) {
      throw new Error("Produto nao encontrado");
    }

    if (!Number.isInteger(quantidadeVenda) || quantidadeVenda <= 0) {
      throw new Error("Quantidade da venda deve ser maior que zero");
    }

    if (produto.quantidade < quantidadeVenda) {
      throw new Error("Estoque insuficiente");
    }

    produto.quantidade -= quantidadeVenda;
    this.registrarMovimentacao("SAIDA", produto, quantidadeVenda);
  }

  listarProdutos() {
    return this.produtos;
  }

  listarMovimentacoes() {
    return this.movimentacoes;
  }

  validarProduto(dados) {
    const nome = String(dados.nome).trim();
    const categoria = String(dados.categoria).trim();
    const preco = Number(dados.preco);
    const quantidade = Number(dados.quantidade);

    if (!nome) {
      throw new Error("Nome obrigatório");
    }

    if (!categoria) {
      throw new Error("Categoria obrigatória");
    }

    if (Number.isNaN(preco) || preco < 0) {
      throw new Error("Preço não pode ser negativo");
    }

    if (!Number.isInteger(quantidade) || quantidade < 0) {
      throw new Error("Quantidade não pode ser negativa");
    }

    return new Produto(dados.id, nome, categoria, preco, quantidade);
  }

  registrarMovimentacao(tipo, produto, quantidade = null) {
    this.movimentacoes.push({
      tipo,
      nome: produto.nome,
      quantidade,
      data: new Date(),
    });
  }
}
