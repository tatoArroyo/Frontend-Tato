import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  URL = 'http://localhost:8080/estudios/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.URL + `detail/${id}`);
  }
  public save(Experiencia: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Estudio);
  }
  public update(id: number, Estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Estudio);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
