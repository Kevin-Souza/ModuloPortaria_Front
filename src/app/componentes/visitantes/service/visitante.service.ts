import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { visitante } from 'src/app/models/visitante'

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  rota: string = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  public insert(visitante: visitante): Observable<number>{
    return this.http.post<number>(`${this.rota}/visitante`,visitante);
  }

  public getAll(): Observable<visitante[]>{
    return this.http.get<visitante[]>(this.rota + '/visitante');
  }
}
