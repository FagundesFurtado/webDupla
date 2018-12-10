import { Component, OnInit } from '@angular/core';
import { ServidorService } from '@app/_services/servidor.service';
import { AlunoNota } from '@app/_models/alunoNota';

@Component({
  selector: 'app-notas-aluno',
  templateUrl: './notas-aluno.component.html',
  styleUrls: ['./notas-aluno.component.css']
})
export class NotasAlunoComponent implements OnInit {

  constructor(private servidor: ServidorService) { }

  notas: AlunoNota[];

  ngOnInit() {
      this.servidor.get('notaaluno').then( lista => {
        console.log(lista);
        this.notas = lista;
      });

  }

}
