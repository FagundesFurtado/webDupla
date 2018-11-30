import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Universidade } from '@app/_models/universidade';

@Component({
  selector: 'app-novo-departamento',
  templateUrl: './novo-departamento.component.html',
  styleUrls: ['./novo-departamento.component.css']
})
export class NovoDepartamentoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;



  universidade: Universidade[] = []

  constructor() { }

  ngOnInit() {

    for(let i =0; i< 10; i++){
      let v = new Universidade();
      v.nome = "Universidade "+i;
      this.universidade.push(v)

    }

  }

}
