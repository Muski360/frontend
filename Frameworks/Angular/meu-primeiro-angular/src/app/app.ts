import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './fragmentos/header/header';
import { Footer } from './fragmentos/footer/footer';
import { Home } from './paginas/home/home';
import { Contato } from './paginas/contato/contato';
import { Produtos } from './paginas/produtos/produtos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Contato, Produtos, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-angular');
}
