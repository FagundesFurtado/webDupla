import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '@app/_models/aluno';
import { Disciplina } from '@app/_models/disciplina';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor() { }

  alunos: Aluno[] = [];
  disciplinas: Disciplina[] = [];

  ngOnInit() {
    for(let i=0; i<10; i++){
      let a = new Aluno();
      let d = new Disciplina();

      a.nome = "Aluno " +i;
      d.nome = "Disciplina " +i;

      this.alunos.push(a);
      this.disciplinas.push(d);
    }

  }

}
