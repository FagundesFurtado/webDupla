import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '@app/_models/curso';
import { Professor } from '@app/_models/professor';
import { ServidorService } from '@app/_services/servidor.service';

@Component({
  selector: 'app-nova-disciplina',
  templateUrl: './nova-disciplina.component.html',
  styleUrls: ['./nova-disciplina.component.css']
})
export class NovaDisciplinaComponent implements OnInit {

  constructor(private servidor: ServidorService) { }

  @ViewChild('formulario') public formulario: NgForm;


  cursos: Curso[] = [];
  professores: Professor[] = [];


  ngOnInit() {
    this.servidor.get(new Curso()).then(lista => this.cursos = lista);
    this.servidor.get(new Professor()).then(lista => this.professores = lista);



  }

  cadastrarDisciplina() {

    console.log(this.formulario.value);

  }


}
