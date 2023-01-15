import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../model/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  expURL = 'http://localhost:8080/explab/'


  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.expURL + "lista");
  }
  public detail(id: number): Observable<Experiencias>{
    return this.httpClient.get<Experiencias>(this.expURL + "detail" + "/" + id);
  }
  public save(Experiencia: Experiencias): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', Experiencias);
  }
  public update(id: number, Experiencia: Experiencias): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, Experiencias);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
