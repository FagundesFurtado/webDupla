import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Router } from '@angular/router';
import { Universidade } from '@app/_models/universidade';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-universidade',
  templateUrl: './universidade.component.html',
  styleUrls: ['./universidade.component.css']
})
export class UniversidadeComponent implements OnInit {


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


  constructor(private router: Router, private modalService: BsModalService, private toastr: ToastrService) { }

  modalRef: BsModalRef;
  delete :any

  public universidade: Universidade[] = [];

  ngOnInit() {
    for(let i=0; i<100; i++){
      let c = new Universidade();
      c.nome = 'Universidade '  + i;
      this.universidade.push(c);
    }
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }


  openModal(template: TemplateRef<any>, dele) {
    this.delete = dele;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {

    const numero = this.delete.nome;
    const index = this.universidade.map(x => {
      return x.nome;
    }).indexOf(numero);

    this.universidade.splice(index, 1);
    this.modalRef.hide();
    this.toastr.success('Removido com sucesso');
  }

  decline(): void {

    this.modalRef.hide();
  }



}
