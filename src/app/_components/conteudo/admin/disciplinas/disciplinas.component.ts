import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Curso } from '../../../../_models/curso';
import { Router } from '@angular/router';
import { Disciplina } from '@app/_models/disciplina';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';



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


  constructor(private router: Router, private modalService: BsModalService,
    private toastr: ToastrService, private data: DataService, private servidor: ServidorService) { }

  modalRef: BsModalRef;
  delete: any;
  public disciplinas: Disciplina[] = [];

  ngOnInit() {

    this.servidor.get('Disciplina').then(lista => { this.disciplinas = lista;

     console.log(lista);

    });

    const teste = new Disciplina();
    teste.curso = 'Curso Nome';

    const a = Object.keys(teste);
    console.log('teste ', a);



  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  openModal(template: TemplateRef<any>, dele) {
    this.delete = dele;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    const numero = this.delete.nome;
    const index = this.disciplinas.map(x => {
      return x.nome;
    }).indexOf(numero);

    this.disciplinas.splice(index, 1);
    this.modalRef.hide();
    this.toastr.success('Removido com sucesso');
  }

  decline(): void {
    this.modalRef.hide();
  }

  editar(objeto: any) {
    this.data.objeto = objeto;
    this.router.navigate(['editar-disciplina']);
  }



}
