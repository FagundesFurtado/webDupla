import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disciplina } from '@app/_models/disciplina';
import { DataService } from '@app/_services/data.service';
import { Curso } from '@app/_models/curso';
import { Professor } from '@app/_models/professor';
import { ServidorService } from '@app/_services/servidor.service';

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

  constructor(private data: DataService, private servidor: ServidorService) { }

  ngOnInit() {

    this.disciplina = this.data.objeto;

    this.servidor.get(new Professor()).then(lista => this.professores = lista);
    this.servidor.get(new Curso()).then(lista => this.cursos = lista);




  }

}
