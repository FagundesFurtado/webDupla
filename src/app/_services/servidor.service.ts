import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/_models/aluno';
import decode from 'jwt-decode';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class ServidorService {

  constructor(private http: Http, private route: Router) { }

  private site = 'https://smartssa.com.br:3000/';

  private getAutorizacao() {
    const user = localStorage.getItem('user');
    let token = JSON.parse(user);
    token = token.Autorizacao;
    console.log('Token ', token);
    return token;
  }

  private getAutenticacao() {
    const user = localStorage.getItem('user');
    let token = JSON.parse(user);
    token = token.Autenticacao;
    console.log('Aute ', token);
    return token;
  }
  private headers() {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Autenticacao', this.getAutenticacao());
    headers.append('Autorizacao', this.getAutorizacao());
    return headers;
  }


  public put(value: string, id: any): Observable<any> {
    const url = this.site + value;
    return this.http.put(url, new RequestOptions({ headers: this.headers(), body: JSON.stringify(id) })).timeout(3000);
  }

  public post(valor: any, tipo: any): Observable<any> {
    const url = this.site + tipo;
    return this.http.post(url, JSON.stringify(valor), new RequestOptions({ headers: this.headers() })).timeout(3000);
  }

  public get(valor: any): Promise<any[]> {
    const url = this.site + valor;
    console.log('url ', url);
    return this.http.get(url, new RequestOptions({ headers: this.headers() })).timeout(3000)
      .toPromise().then((resposta: any) => {
          console.log(resposta);
        return resposta.json();
      },
      (error) => {
          this.route.navigate(['login']);
      }).catch();
  }

  public delete(id: any): Observable<any> {
    const url = this.site + id;
    return this.http.delete(url, new RequestOptions({ headers: this.headers(), body: JSON.stringify(id) })).timeout(3000);
  }


}
