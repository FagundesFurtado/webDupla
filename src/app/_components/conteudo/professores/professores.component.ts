import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Departamento } from '../../../_models/departamento';
import { Router } from '@angular/router';
import { Professor } from '@app/_models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

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

  public professores: Professor[] = [];

  ngOnInit() {
    for(let i=0; i<100; i++){
      let c = new Professor();
      c.nome = 'Professor '  + i;
      this.professores.push(c);
    }
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }



}
