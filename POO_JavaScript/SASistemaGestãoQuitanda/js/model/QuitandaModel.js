// Classe que guarda os dados de cada produto.
export class Produto {
  constructor(id, nome, categoria, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

// Classe que cuida dos produtos e movimentações.
export class QuitandaModel {
  constructor() {
    // Declarando listas vazias.
    this.produtos = [];
    this.movimentacoes = [];
  }

  // Função para adicionar produto novo.
  addProduto(dados) {
    const produto = this.validarProduto(dados);

    //verifica se já tem produto com o mesmo nome.
    const existe = this.produtos.find(
      (p) => p.nome.toLowerCase() === produto.nome.toLowerCase(),
    );

    if (existe) {
      throw new Error("Produto já existe");
    }

    const categoriaExistente = this.buscarCategoriaExistente(produto.categoria);

    // se a categoria já existe, usa o mesmo nome dela.
    if (categoriaExistente) {
      produto.categoria = categoriaExistente;
    }

    this.produtos.push(produto);
    this.registrarMovimentacao("ENTRADA", produto, produto.quantidade);
  }

  // Função para atualizar os dados de um produto.
  atualizarProduto(nome, dados) {
    // Busca o produto sem ligar para maiúsculas ou minúsculas.
    const nomeBusca = String(nome).trim().toLowerCase();
    const produto = this.produtos.find(
      (p) => p.nome.toLowerCase() === nomeBusca,
    );

    if (!produto) {
      throw new Error("Produto não encontrado");
    }

    const quantidadeAnterior = produto.quantidade;
    const dadosAtualizados = this.validarProduto({
      // Mantém os dados antigos e troca só o que foi enviado.
      ...produto,
      ...dados,
      id: produto.id,
    });
    const categoriaExistente = this.buscarCategoriaExistente(
      dadosAtualizados.categoria,
    );

    if (categoriaExistente) {
      dadosAtualizados.categoria = categoriaExistente;
    }

    Object.assign(produto, dadosAtualizados);

    // Verifica se entrou, saiu ou só mudou dados do produto.
    const diferencaQuantidade = produto.quantidade - quantidadeAnterior;

    if (diferencaQuantidade > 0) {
      this.registrarMovimentacao("ENTRADA", produto, diferencaQuantidade);
    } else if (diferencaQuantidade < 0) {
      this.registrarMovimentacao("SAÍDA", produto, Math.abs(diferencaQuantidade));
    } else {
      this.registrarMovimentacao("ATUALIZAÇÃO", produto);
    }
  }

  // Função para vender produto, que apenas abaixa o estoque.
  venderProduto(nome, quantidade) {
    // Procura o produto pelo nome.
    const produto = this.produtos.find(
      (p) => p.nome.toLowerCase() === String(nome).trim().toLowerCase(),
    );
    const quantidadeVenda = Number(quantidade);

    if (!produto) {
      throw new Error("Produto não encontrado");
    }

    if (!Number.isInteger(quantidadeVenda) || quantidadeVenda <= 0) {
      throw new Error("Quantidade da venda deve ser maior que zero");
    }

    if (produto.quantidade < quantidadeVenda) {
      throw new Error("Estoque insuficiente");
    }

    // Tira a quantidade vendida do estoque.
    produto.quantidade -= quantidadeVenda;
    this.registrarMovimentacao("SAÍDA", produto, quantidadeVenda);
  }

  // Retorna todos os produtos.
  listarProdutos() {
    return this.produtos;
  }

  // Retorna o histórico de movimentações.
  listarMovimentacoes() {
    return this.movimentacoes;
  }

  // Calcula a porcentagem das categorias e dos produtos.
  listarPorcentagens() {
    // Soma todas as quantidades do estoque.
    const totalProdutos = this.produtos.reduce(
      (total, produto) => total + produto.quantidade,
      0,
    );

    return this.produtos.reduce((categorias, produto) => {
      // Procura se a categoria ja existe na lista.
      let categoria = categorias.find(
        (c) => c.nome.toLowerCase() === produto.categoria.toLowerCase(),
      );

      // Se não existir, cria uma categoria nova.
      if (!categoria) {
        categoria = {
          nome: produto.categoria,
          quantidade: 0,
          porcentagem: 0,
          produtos: [],
        };

        categorias.push(categoria);
      }

      categoria.quantidade += produto.quantidade;

      //guarda o produto dentro da categoria dele.
      categoria.produtos.push({
        nome: produto.nome,
        quantidade: produto.quantidade,
        porcentagem: 0,
      });

      // calcula quanto essa categoria representa no estoque todo.
      if (totalProdutos > 0) {
        categoria.porcentagem = (categoria.quantidade / totalProdutos) * 100;
      }

      // Calcula quanto cada produto representa dentro da categoria.
      categoria.produtos.forEach((item) => {
        if (categoria.quantidade > 0) {
          item.porcentagem = (item.quantidade / categoria.quantidade) * 100;
        }
      });

      return categorias;
    }, []);
  }

  // Busca categoria igual, mesmo se tiver maiúscula diferente.
  buscarCategoriaExistente(categoria) {
    const categoriaBusca = String(categoria).trim().toLowerCase();
    const categoriaExistente = this.produtos.find(
      (produto) => produto.categoria.toLowerCase() === categoriaBusca,
    );

    return categoriaExistente ? categoriaExistente.categoria : null;
  }

  // Valida os dados antes de cadastrar ou atualizar.
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

  // Salva uma movimentação no histórico.
  registrarMovimentacao(tipo, produto, quantidade = null) {
    this.movimentacoes.push({
      tipo,
      nome: produto.nome,
      quantidade,
      data: new Date(),
    });
  }
}
