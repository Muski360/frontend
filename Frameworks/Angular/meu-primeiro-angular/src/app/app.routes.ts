import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Contato } from './paginas/contato/contato';
import { Produtos } from './paginas/produtos/produtos';

export const routes: Routes = [
  {path: "home", component: Home},
  {path: "contato", component: Contato},
  {path: "produto", component: Produtos},
  {path: "**", redirectTo: "home"}
];
