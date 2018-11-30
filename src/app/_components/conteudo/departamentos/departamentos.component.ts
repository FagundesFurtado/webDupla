import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Departamento } from '../../../_models/departamento';
import { Router } from '@angular/router';
import { Disciplina } from '@app/_models/disciplina';
@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {


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

  public departamento: Departamento[] = [];

  ngOnInit() {
    for(let i=0; i<100; i++){
      let c = new Departamento();
      c.nome = 'Departamento '  + i;
      this.departamento.push(c);
    }
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }



}