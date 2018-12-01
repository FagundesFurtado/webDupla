import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/_models/aluno';


@Injectable()
export class ServidorService {

  constructor(private http: Http) { }

  public put(id: any): Observable<any> {
    const url = 'http://localhost:3000/' + id.constructor.name;
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const token = localStorage.getItem('token');

    headers.append('Authorization', token);
    return this.http.put(url, new RequestOptions({ headers: headers, body: JSON.stringify(id) })).timeout(3000);
  }

  public post(valor: any, tipo: any): Observable<any> {
    const url = 'http://localhost:3000/' + tipo.constructor.name;
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.post(url, JSON.stringify(valor), new RequestOptions({ headers: headers })).timeout(3000);
  }

  public get(valor: any): Promise<any[]> {

    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const user = localStorage.getItem('token');
    var token = JSON.parse(user);
    token = token.token;
    console.log('Token ', token);
    headers.append('Authorization', token);
    return this.http.get('http://localhost:3000/' + valor.constructor.name, new RequestOptions({ headers: headers })).timeout(3000)
      .toPromise().then((resposta: any) => {
        return resposta.json();
      });
  }

  public delete(id: any): Observable<any> {
    const url = 'http://localhost:3000/' + id.constructor.name;
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.delete(url, new RequestOptions({ headers: headers, body: JSON.stringify(id) })).timeout(3000);
  }


}
