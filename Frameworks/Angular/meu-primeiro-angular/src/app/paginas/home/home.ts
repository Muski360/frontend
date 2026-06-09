import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //declarar um atributo
  nome: string = 'Maria';
  // Interpolação {{}} (Unidirecional = Typescript -> HTML)

  imgUrl: string =
    'https://imgs.search.brave.com/3VdiCbTiMNhlUaknGPRGF-9_iei28_FpRYTqUcMsWiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bnNjdG90YWwuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzEwL0Rhcmxh/bi1wZWxhLXNlbGVj/YW8tYnJhc2lsZWly/YS1kZS12b2xlaS05/NDR4NTMxLmpwZw';
  //property binding [] (Unidirecional TS -> HTML)

  botaoStatus: boolean = true;
  //property binding

  //Style a class binding = : Alteração de classe e Style via data binding
  classeAlerta: string = "alert-success"
}
