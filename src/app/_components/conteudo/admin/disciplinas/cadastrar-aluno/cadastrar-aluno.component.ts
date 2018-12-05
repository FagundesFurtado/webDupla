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


  }


  matricular() {


  }
}
