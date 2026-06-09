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
  }

  atualizarCurriculo(id: any): void {
    this._curriculoService.putCurriculo(id, this.curriculo).subscribe(() => {
      this.curriculo = this.novoCurriculo();
      this.listarCurriculos();
      alert('Currículo atualizado com sucesso');
    });
  }

  removerCurriculo(id: any): void {
    this._curriculoService.deleteCurriculo(id).subscribe(() => {
      this.curriculo = this.novoCurriculo();
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
      item.formacoes,
      item.experiencias,
      item.habilidades,
      item.linkedin,
    );
  }
}
