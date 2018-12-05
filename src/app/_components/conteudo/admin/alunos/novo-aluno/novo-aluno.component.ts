import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '@app/_models/curso';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {


  @ViewChild('formulario') public formulario: NgForm;
  constructor() { }

  cursos: Curso[];

  ngOnInit() {
  }
  cadastrar() {

  }

}
