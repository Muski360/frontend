import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculoservice';

@Component({
  selector: 'app-curriculo-list',
  imports: [FormsModule],
  templateUrl: './curriculo-list.html',
  styleUrl: './curriculo-list.scss',
})
export class CurriculoList implements OnInit {
  public curriculos: Curriculo[] = [];
  public curriculo: Curriculo = this.novoCurriculo();
  public curriculoExpandidoId: number | string | null = null;

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe((resposta) => {
      this.curriculos = resposta.map((item) => this.mapearCurriculo(item));
    });
  }

  selecionarCurriculo(curriculo: Curriculo): void {
    this.curriculo = this.mapearCurriculo(curriculo);
    this.curriculoExpandidoId = curriculo.id;
  }

  fecharEdicao(): void {
    this.curriculo = this.novoCurriculo();
    this.curriculoExpandidoId = null;
  }

  adicionarFormacao(): void {
    this.curriculo.formacoes.push('');
  }

  adicionarExperiencia(): void {
    this.curriculo.experiencias.push('');
  }

  adicionarHabilidade(): void {
    this.curriculo.habilidades.push('');
  }

  removerFormacao(index: number): void {
    this.removerCampo(this.curriculo.formacoes, index);
  }

  removerExperiencia(index: number): void {
    this.removerCampo(this.curriculo.experiencias, index);
  }

  removerHabilidade(index: number): void {
    this.removerCampo(this.curriculo.habilidades, index);
  }

  atualizarCurriculo(): void {
    this._curriculoService.putCurriculo(this.curriculo.id, this.prepararCurriculo()).subscribe(() => {
      this.fecharEdicao();
      this.listarCurriculos();
      alert('Currículo atualizado com sucesso');
    });
  }

  removerCurriculo(id: any): void {
    this._curriculoService.deleteCurriculo(id).subscribe(() => {
      this.fecharEdicao();
      this.listarCurriculos();
      alert('Currículo removido com sucesso');
    });
  }

  private novoCurriculo(): Curriculo {
    return new Curriculo(0, 0, '', [''], [''], [''], '');
  }

  private mapearCurriculo(item: Curriculo): Curriculo {
    return new Curriculo(
      item.id,
      item.usuarioId,
      item.nomeCompleto,
      [...item.formacoes],
      [...item.experiencias],
      [...item.habilidades],
      item.linkedin,
    );
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

  private removerCampo(campos: string[], index: number): void {
    if (campos.length > 1) {
      campos.splice(index, 1);
    }
  }
}
