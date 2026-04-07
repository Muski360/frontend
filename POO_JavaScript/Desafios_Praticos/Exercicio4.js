class Funcionario {
  nome;
  salario;
  cargo;

  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  aumentarSalario(percentual) {
    this.salario += this.salario * (percentual / 100);
    console.log(`Salário aumentado em ${percentual}%.`);
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário: R$ ${this.salario}`);
    console.log(`Cargo: ${this.cargo}`);
  }
}

let funcionario1 = new Funcionario("Murilo", 900, "Bolsa Família");

funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
