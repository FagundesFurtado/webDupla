import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/_models/aluno';
import decode from 'jwt-decode';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ServidorService {

  constructor(private http: Http, private route: Router, private auth: AuthenticationService) { }

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


  public put(classe: string, id: any): Observable<any> {
    const url = this.site + classe;
   return this.http.put(url, id , new RequestOptions({ headers: this.headers()})).timeout(3000);
  }

  public post(valor: any, classe: any): Observable<any> {
    const url = this.site + classe;
    return this.http.post(url, JSON.stringify(valor), new RequestOptions({ headers: this.headers() })).timeout(3000);
  }

  public get(valor: any): Promise<any[]> {
    const url = this.site + valor;
    console.log('url ', url);
    return this.http.get(url, new RequestOptions({ headers: this.headers() })).toPromise()
                .then((data) => {
                  console.log(data);
                  return data.json();
                }).catch(erro => this.verificaPermissao(erro));

  }

  public delete(classe: string,  valor: any): Observable<any> {
    const url = this.site + classe;
    const head = this.headers();
    head.append(classe, valor);
    console.log(head);
    return this.http.delete(url,  new RequestOptions({ headers: head })).timeout(3000);
  }

  public verificaPermissao(erro) {
      if (erro.status === 401) {
        this.auth.logout();
      }
  }

}
