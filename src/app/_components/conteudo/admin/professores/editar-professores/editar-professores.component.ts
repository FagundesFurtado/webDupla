import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departamento } from '@app/_models/departamento';
import { ServidorService } from '@app/_services/servidor.service';
import { DataService } from '@app/_services/data.service';
import { Professor } from '@app/_models/professor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Curso } from '@app/_models/curso';

@Component({
  selector: 'app-editar-professores',
  templateUrl: './editar-professores.component.html',
  styleUrls: ['./editar-professores.component.css']
})
export class EditarProfessoresComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  departamento: Departamento[] = [];
  curso: Curso[];

  constructor(private servidor: ServidorService, private data: DataService,
              private toast: ToastrService, private route: Router) { }
  professor: Professor;

  ngOnInit() {
    this.servidor.get('Departamento').then(lista => this.departamento = lista);
    this.servidor.get('Curso').then(lista => this.curso = lista);
    this.professor = this.data.objeto;

  }

  finalizarCadastro() {
    const saida = Object.assign(new Professor, this.formulario.value);
    saida.idProfessor = this.professor.idProfessor;

    this.servidor.put('Professor', saida).subscribe(data => {
        this.toast.success('Editado com sucesso');
        this.route.navigate(['professores']);
    }, erro => {
        this.toast.error('Servidor indisponível no momento');
    });


  }

}
