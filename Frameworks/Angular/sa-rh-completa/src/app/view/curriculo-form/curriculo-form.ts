import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculoservice';

@Component({
  selector: 'app-curriculo-form',
  imports: [FormsModule],
  templateUrl: './curriculo-form.html',
  styleUrl: './curriculo-form.scss',
})
export class CurriculoForm {
  public curriculo: Curriculo = this.novoCurriculo();

  constructor(private _curriculoService: CurriculoService) {}

  adicionarFormacao(): void {
    this.curriculo.formacoes.push('');
  }

  adicionarExperiencia(): void {
    this.curriculo.experiencias.push('');
  }

  adicionarHabilidade(): void {
    this.curriculo.habilidades.push('');
  }

  // Apenas cadastra um novo currículo.
  criarCurriculo(): void {
    this._curriculoService.postCurriculo(this.prepararCurriculo()).subscribe(() => {
      this.curriculo = this.novoCurriculo();
      alert('Currículo cadastrado com sucesso');
    });
  }

  private novoCurriculo(): Curriculo {
    return new Curriculo(0, 0, '', [''], [''], [''], '');
  }

  private prepararCurriculo(): Curriculo {
    return new Curriculo(
      this.curriculo.id,
      this.curriculo.usuarioId,
      this.curriculo.nomeCompleto,
      this.limparLista(this.curriculo.formacoes),
      this.limparLista(this.curriculo.experiencias),
      this.limparLista(this.curriculo.habilidades),
      this.curriculo.linkedin,
    );
  }

  private limparLista(lista: string[]): string[] {
    return lista.map((item) => item.trim()).filter(Boolean);
  }
}
