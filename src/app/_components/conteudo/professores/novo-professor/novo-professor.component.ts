import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departamento } from '@app/_models/departamento';

@Component({
  selector: 'app-novo-professor',
  templateUrl: './novo-professor.component.html',
  styleUrls: ['./novo-professor.component.css']
})
export class NovoProfessorComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  departamento: Departamento[] = [];

  constructor() { }


  ngOnInit() {
    for(let i=0; i<10 ;i++){
        let d = new Departamento();
        d.nome = "Departamento " +i;
        this.departamento.push(d);

    }
  }

  cadastrarProfessor(){
      console.log(this.formulario.value)


  }
}
