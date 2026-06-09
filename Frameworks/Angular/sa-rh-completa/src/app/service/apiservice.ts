import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private vagasUrl = 'http://localhost:3027/vagas';

  constructor(private http: HttpClient) {}

  // Vagas
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.vagasUrl);
  }

  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.vagasUrl, vaga);
  }

  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlUpdate = `${this.vagasUrl}/${id}`;
    return this.http.put<Vaga[]>(urlUpdate, vaga);
  }

  deleteVaga(id: any): Observable<Vaga[]> {
    const urlDelete = `${this.vagasUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);
  }
}
