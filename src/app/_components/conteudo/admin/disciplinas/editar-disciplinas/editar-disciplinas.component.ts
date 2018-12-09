import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disciplina } from '@app/_models/disciplina';
import { DataService } from '@app/_services/data.service';
import { Curso } from '@app/_models/curso';
import { Professor } from '@app/_models/professor';
import { ServidorService } from '@app/_services/servidor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-disciplinas',
  templateUrl: './editar-disciplinas.component.html',
  styleUrls: ['./editar-disciplinas.component.css']
})
export class EditarDisciplinasComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  disciplina: Disciplina;
  cursos: Curso[];
  professores: Professor[];

  constructor(private data: DataService, private servidor: ServidorService,
              private toast: ToastrService, private route: Router) { }

  ngOnInit() {

    this.disciplina = this.data.objeto;

    this.servidor.get('Professor').then(lista => this.professores = lista);
    this.servidor.get('Curso').then(lista => this.cursos = lista);




  }

  finalizarEdicao() {
    const saida = Object.assign(new Disciplina, this.formulario.value);
    saida.idDisciplina = this.disciplina.idDisciplina;
    this.servidor.put('Disciplina', saida).subscribe(data => {
      this.toast.success('Editado com sucesso');
      this.route.navigate(['disciplinas']);
    }, erro => {
      this.toast.error('Servidor indisponível no momento');
    });

  }

}
