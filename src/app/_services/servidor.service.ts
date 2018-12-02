import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/_models/aluno';
import decode from 'jwt-decode';

@Injectable()
export class ServidorService {

  constructor(private http: Http) { }

  private site = 'http://localhost:3000/';

  private getToken() {
    const user = localStorage.getItem('user');
    let token = JSON.parse(user);
    token = token.token;
    console.log('Token ', token);
    return token;
  }

  private headers() {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.getToken());
    headers.append('Curso', '1');
    return headers;
  }


  public put(id: any): Observable<any> {
    const url = this.site + id.constructor.name;
    return this.http.put(url, new RequestOptions({ headers: this.headers(), body: JSON.stringify(id) })).timeout(3000);
  }

  public post(valor: any, tipo: any): Observable<any> {
    const url = this.site + tipo.constructor.name;
    return this.http.post(url, JSON.stringify(valor), new RequestOptions({ headers: this.headers() })).timeout(3000);
  }

  public get(valor: any): Promise<any[]> {
    const url = this.site + valor.constructor.name;

    return this.http.get(url, new RequestOptions({ headers: this.headers() })).timeout(3000)
      .toPromise().then((resposta: any) => {
        return resposta.json();
      });
  }

  public delete(id: any): Observable<any> {
    const url = this.site + id.constructor.name;
    return this.http.delete(url, new RequestOptions({ headers: this.headers(), body: JSON.stringify(id) })).timeout(3000);
  }


}
