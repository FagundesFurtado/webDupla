import { Component, OnInit } from '@angular/core';
import { AlunoNota } from '@app/_models/alunoNota';
import { Aluno } from '@app/_models/aluno';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor() { }

  disciplina : AlunoNota[] = []
  aluno : Aluno
  
  ngOnInit() {
    this.aluno = new Aluno()
    this.aluno.nome = "Peteca"
    this.aluno.curso = "Programador de Peteca"
    this.aluno.email = "peteca@peteca.com"
    this.aluno.telefone = "40028922"

    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))
    this.disciplina.push(new AlunoNota(10,0,"IA"))



  }

}
