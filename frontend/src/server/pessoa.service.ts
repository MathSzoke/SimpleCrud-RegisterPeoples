import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  getAllPessoas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchPessoas(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?nome=${nome}`);
  }

  addPessoa(pessoa: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Sending Pessoa:', pessoa);
    return this.http.post<any>(`${this.apiUrl}`, pessoa, { headers });
  }

  updatePessoa(id: string, pessoa: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/${id}`, pessoa, { headers });
  }

  deletePessoa(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  calculateIdealWeight(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/peso-ideal`);
  }
}
