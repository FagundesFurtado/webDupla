import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Universidade } from '../../../../../_models/universidade';
import { ServidorService } from '@app/_services/servidor.service';

@Component({
  selector: 'app-novo-departamento',
  templateUrl: './novo-departamento.component.html',
  styleUrls: ['./novo-departamento.component.css']
})
export class NovoDepartamentoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;



  universidade: Universidade[] = []

  constructor(private servidor: ServidorService) { }

  ngOnInit() {
      this.servidor.get(new Universidade()).then(lista => this.universidade = lista);
  }

}
