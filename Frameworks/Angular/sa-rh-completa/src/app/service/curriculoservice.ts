import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private curriculosUrl = 'http://localhost:3027/curriculos';

  constructor(private http: HttpClient) {}

  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.curriculosUrl);
  }

  postCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.curriculosUrl, curriculo);
  }

  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo> {
    const urlUpdate = `${this.curriculosUrl}/${id}`;
    return this.http.put<Curriculo>(urlUpdate, curriculo);
  }

  deleteCurriculo(id: any): Observable<Curriculo> {
    const urlDelete = `${this.curriculosUrl}/${id}`;
    return this.http.delete<Curriculo>(urlDelete);
  }
}
