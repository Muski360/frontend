class ContaBancaria {
  titular;
  saldo;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso.`);
    }
  }

  exibirSaldo() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }
}

let conta1 = new ContaBancaria("Lorenzo", 1253145);

conta1.exibirSaldo();
conta1.depositar(500);
conta1.sacar(300);
conta1.exibirSaldo();
