import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  contador: number = 0;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  //função sem parametros
  incrementar() {
    this.contador++;
  }

  onKeyUp(event: any) {
    this.valorAtual = event.target.value;
  }

  //Função salvar valor
  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  //alternar
  alternarDestaque() {
    this.isMouseOver = !this.isMouseOver;
  }
}
