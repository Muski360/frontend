import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Vagas } from './view/vagas/vagas';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { CurriculoForm } from './view/curriculo-form/curriculo-form';
import { CurriculoList } from './view/curriculo-list/curriculo-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'vagas', component: Vagas },
  { path: 'painel-vagas', component: PainelVagas },
  { path: 'curriculo-form', component: CurriculoForm },
  { path: 'curriculo-list', component: CurriculoList },
];
