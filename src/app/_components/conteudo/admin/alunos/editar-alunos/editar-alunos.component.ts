import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '@app/_models/aluno';
import { DataService } from '@app/_services/data.service';
import { NgForm } from '@angular/forms';
import { Curso } from '@app/_models/curso';
import { ServidorService } from '@app/_services/servidor.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-editar-alunos',
  templateUrl: './editar-alunos.component.html',
  styleUrls: ['./editar-alunos.component.css']
})
export class EditarAlunosComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  aluno: Aluno;
  cursos: Curso[];
  constructor(private data: DataService, private route: Router, private servidor: ServidorService,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.aluno = this.data.objeto;
    console.log('Aluno ', this.aluno);

    this.servidor.get('Curso').then(lista => this.cursos = lista);


  }

  finalizarEdicao() {
    this.servidor.put('Aluno', this.formulario.value).subscribe(data => this.toastr.success('Editado com sucesso'),
                                                      erro => this.toastr.error('Servidor indisponível no momento'));
  }


}
