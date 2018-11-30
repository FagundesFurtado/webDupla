import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/_models/aluno';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  public cadastrarAluno(aluno: Aluno): Observable<any> {
    const url = 'http://localhost:3000/finalizaPedido';
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(url, JSON.stringify(aluno), new RequestOptions({ headers: headers })).timeout(3000);

  }

  public cadastrarUniversidade(aluno: Aluno): Observable<any> {
    const url = 'http://localhost:3000/finalizaPedido';
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(url, JSON.stringify(aluno), new RequestOptions({ headers: headers })).timeout(3000);

  }
}
