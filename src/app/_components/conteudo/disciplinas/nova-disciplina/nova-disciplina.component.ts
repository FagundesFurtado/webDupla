import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '@app/_models/curso';
import { Professor } from '@app/_models/professor';

@Component({
  selector: 'app-nova-disciplina',
  templateUrl: './nova-disciplina.component.html',
  styleUrls: ['./nova-disciplina.component.css']
})
export class NovaDisciplinaComponent implements OnInit {

  constructor() { }

  @ViewChild('formulario') public formulario: NgForm;


  cursos: Curso[] = [];
  professores: Professor[] = [];


  ngOnInit() {

    for(let i =0; i<10; i++){
      let c = new Curso()
      let p = new Professor()

      c.nome = "Curso "+i
      p.nome = "Professor " +i

      this.cursos.push(c)
      this.professores.push(p)


    }


  }

  cadastrarDisciplina(){

    console.log(this.formulario.value)

  }


}
