import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core'
import { AlunoDisciplina } from '@app/_models/alunoDisciplina';

@Component({
  selector: 'app-mudar-notas',
  templateUrl: './mudar-notas.component.html',
  styleUrls: ['./mudar-notas.component.css']
})



export class MudarNotasComponent implements OnInit {

  constructor() { }

  @ViewChild('formulario') public formulario :NgForm


  alunos : AlunoDisciplina[] = []

  ngOnInit() {
    this.alunos.push(new AlunoDisciplina(10,0,"Peteca"))

  }

  finalizarAtualizacao(){


  }



}
