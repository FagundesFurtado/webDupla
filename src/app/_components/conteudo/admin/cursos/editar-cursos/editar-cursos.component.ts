import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from '@app/_models/curso';
import { Departamento } from '@app/_models/departamento';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { Professor } from '@app/_models/professor';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;


  constructor(private data: DataService, private toastr: ToastrService,
              private servidor: ServidorService, private auth: AuthenticationService,
              private route: Router) { }

  curso: Curso;
  departamentos: Departamento[];
  professores: Professor[];

  ngOnInit() {

    this.curso = this.data.objeto;
    this.servidor.get('Departamento').then(lista => this.departamentos = lista);
    this.servidor.get('Professor').then(lista => this.professores = lista);

  }


  finalizarEdicao() {

    const saida = Object.assign(new Curso, this.formulario.value);
    saida.idCurso = this.curso.idCurso;


    this.servidor.put('Curso', saida)
      .subscribe(data => {
        this.toastr.success('Editado com sucesso');
        this.route.navigate(['cursos']);
      },
        erro => {
           this.toastr.error('Servidor indisponível no momento');
    });
  }

}
