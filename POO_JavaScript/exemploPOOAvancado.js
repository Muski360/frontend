class Pessoa {
    // atributos privados (encapsulamento)
    #nome;
    #idade;
    #cpf;

    constructor(nome, idade, cpf){
        this.#nome = nome
        this.#idade = idade;
        this.#cpf = cpf;
    }

    //getters and setters
    get getNome() {
        return this.#nome;
    }

    get getIdade(){
        return this.#idade;
    }

    get getCpf(){
        return this.#cpf;
    }

    set setIdade(idade){
        this.#idade=idade;
    }

    exibirInfo(){
        console.log(
          `Nome: ${this.#nome}\nIdade: ${this.#idade}\nCPF: ${this.#cpf}`,
        );
    }
}

let pessoa1 = new Pessoa("João", 25, "123.456.789-00")
let pessoa2 = new Pessoa("Maria", 24, "987.654.321-00")

pessoa1.exibirInfo();
pessoa2.exibirInfo();

// alterar a idade da pessoa 1

pessoa1.setIdade(26);
pessoa1.exibirInfo();

// Herança em POO (extends)

class Funcionario extends Pessoa {
  // novos atributos
  #cargo;
  #salario;
  //construtor
  constructor(nome, idade, cpf, cargo, salario) {
    super(nome, idade, cpf); //chama os atributos da superclasse
    this.#cargo = cargo;
    this.#salario = salario;
  }

  // métodos públicos (get Set)
  get getCargo() {
    return this.#cargo;
  }
  get getSalario() {
    return this.#salario;
  }
  set setCargo(cargo) {
    this.#cargo = cargo;
  }
  set setSalario(salario) {
    this.#salario = salario;
  }

  //método de acesso
  exibirInfo() {
    //polimorfismo
    super.exibirInfo();
    console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);
  }
}

let funcionario1 = new Funcionario(
  "Pedro",
  27,
  "321.654.987-00",
  "Motorista",
  3000,
);''
funcionario1.exibirInfo();
funcionario1.setSalario(3500);
funcionario1.exibirInfo()

