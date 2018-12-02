import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from '@app/_models/curso';
import { Departamento } from '@app/_models/departamento';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;


  constructor(private data: DataService, private toastr: ToastrService, private servidor: ServidorService) { }

  curso: Curso;
  departamentos: Departamento[];

  ngOnInit() {

    this.curso = this.data.objeto;
    this.servidor.get(new Departamento()).then(lista => this.departamentos = lista);

  }


  fianlizarEdicao() {
    this.servidor.put(this.formulario.value).subscribe(data => this.toastr.success('Editado com sucesso'),
                                                      erro => this.toastr.error('Servidor indisponível no momento'));
  }

}
