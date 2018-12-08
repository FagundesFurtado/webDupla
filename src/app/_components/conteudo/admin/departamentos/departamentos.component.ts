import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Departamento } from '../../../../_models/departamento';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Disciplina } from '@app/_models/disciplina';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';


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


  constructor(private router: Router, private route: ActivatedRoute,
    private modalService: BsModalService, private toastr: ToastrService,
    private data: DataService, private servidor: ServidorService) { }

  modalRef: BsModalRef;
  delete: any;
  message: string;

  public departamento: Departamento[] = [];

  ngOnInit() {
    this.servidor.get('Departamento').then(
      lista => {this.departamento = lista;
      console.log(this.departamento);

    });


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
    const index = this.departamento.map(x => {
      return x.nome;
    }).indexOf(numero);

    this.departamento.splice(index, 1);
    this.modalRef.hide();
    this.toastr.success('Removido com sucesso');
  }

  decline(): void {

    this.modalRef.hide();
  }

  editar(objeto: Departamento) {

    this.data.objeto = objeto;

      this.router.navigate(['/editar-departamento']);
  }



}
