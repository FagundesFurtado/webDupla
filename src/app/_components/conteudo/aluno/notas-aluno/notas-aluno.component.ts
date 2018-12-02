import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-aluno',
  templateUrl: './notas-aluno.component.html',
  styleUrls: ['./notas-aluno.component.css']
})
export class NotasAlunoComponent implements OnInit {

  constructor() { }

  notas: any[];

  ngOnInit() {
  }

}
