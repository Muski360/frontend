class Veiculo {
  marca;
  modelo;
  ano;

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
  }
}

class Carro extends Veiculo {
  quantidadePortas;

  constructor(marca, modelo, ano, quantidadePortas) {
    super(marca, modelo, ano);
    this.quantidadePortas = quantidadePortas;
  }

  exibirInfo() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Quantidade de portas: ${this.quantidadePortas}`);
  }
}

let carro1 = new Carro("Honda", "Civic", 2020, 4);
carro1.exibirInfo();
