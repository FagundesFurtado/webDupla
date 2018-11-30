import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Professor } from 'src/app/_models/professor';
import { Universidade } from '@app/_models/universidade';
import { Curso } from '@app/_models/curso';
import { Disciplina } from '@app/_models/disciplina';
import { Departamento } from '@app/_models/departamento';
import { Aluno } from '@app/_models/aluno';

@Injectable()
export class GetService {

  constructor(private http: Http) { }

  public get(valor: any): Promise<any []> {
    return this.http.get('http://localhost:3000/' + valor.constructor.name)
    .toPromise()
    .then((resposta: any) => {
      return resposta.json();
    });
  }


}
