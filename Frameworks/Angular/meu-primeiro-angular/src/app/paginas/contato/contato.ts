import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  nome: string = '';
  email: string = '';
  mensagem: string = '';
  mostrar: boolean = false;

  //salvar
  salvarNome(nome: string) {
    this.nome = nome;
  }
  salvarEmail(email: string) {
    this.email = email;
  }
  salvarMensagem(mensagem: string) {
    this.mensagem = mensagem;
  }

  mostrarDados() {
    this.mostrar = true;
  }
}
