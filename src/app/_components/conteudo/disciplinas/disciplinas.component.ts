import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Curso } from '../../../_models/curso';
import { Router } from '@angular/router';
import { Disciplina } from '@app/_models/disciplina';


@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  public filter = '';
  public maxSize = 7;
  public directionLinks = true;
  public autoHide = false;
  public responsive = false;
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Paginação',
    screenReaderPageLabel: 'página',
    screenReaderCurrentLabel: 'Você está na página'
  };


  constructor(private router: Router) { }

  public disciplinas: Disciplina[] = [];

  ngOnInit() {
    for(let i=0; i<100; i++){
      let c = new Disciplina();
      c.nome = 'Disciplina '  + i;
      this.disciplinas.push(c);
    }
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }



}
