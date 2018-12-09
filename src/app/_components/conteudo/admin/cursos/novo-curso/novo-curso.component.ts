import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '@app/_models/departamento';
import { ServidorService } from '@app/_services/servidor.service';
import { Router } from '@angular/router';
import { Professor } from '@app/_models/professor';



@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private toastr: ToastrService, private servidor: ServidorService,
              private route: Router) { }

  departamentos: Departamento[] = [];
  professores: Professor[];

  ngOnInit() {
    this.servidor.get('Departamento').then(lista => this.departamentos = lista);
    this.servidor.get('Professor').then(lista => this.professores = lista);
  }


  cadastrarCurso() {
    this.servidor.post(this.formulario.value, 'Curso').subscribe(data => {
      this.toastr.success('Cadastrado com sucesso');
      this.route.navigate(['cursos']);
    }, error => {
      this.toastr.error('Servidor indisponível no momento');
    });

  }


  teste() {
    console.log('toast');
    this.toastr.success('Voltou');


  }
}
