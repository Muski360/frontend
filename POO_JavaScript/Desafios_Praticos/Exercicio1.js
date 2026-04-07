class Produto {
  nome;
  preco;
  estoque;

  // construtor
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  // getters
  get getNome() {
    return this.nome;
  }

  get getPreco() {
    return this.preco;
  }

  get getEstoque() {
    return this.estoque;
  }

  // setters
  set setNome(nome) {
    this.nome = nome;
  }

  set setPreco(preco) {
    this.preco = preco;
  }

  set setEstoque(estoque) {
    this.estoque = estoque;
  }

  // método para vender
  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log("Estoque insuficiente!");
    } else {
      this.estoque -= quantidade;
      console.log(`Venda realizada! (${quantidade} unidades)`);
    }
  }

  // método para repor
  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`Estoque reposto! (+${quantidade})`);
  }

  // exibir informações
  exibirInfo() {
    console.log(
      `\nNome: ${this.nome}\nPreço: R$ ${this.preco}\nEstoque: ${this.estoque}`,
    );
  }
}

// criando produtos
let produto1 = new Produto("Nescau", 24.99, 233);
let produto2 = new Produto("Toddy", 24.99, 211);

// exibindo info inicial
produto1.exibirInfo();
produto2.exibirInfo();

produto1.vender(10);
produto1.repor(20);
produto1.exibirInfo();