import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departamento } from '@app/_models/departamento';
import { ServidorService } from '@app/_services/servidor.service';

@Component({
  selector: 'app-novo-professor',
  templateUrl: './novo-professor.component.html',
  styleUrls: ['./novo-professor.component.css']
})
export class NovoProfessorComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  departamento: Departamento[] = [];

  constructor(private servidor: ServidorService) { }


  ngOnInit() {

    this.servidor.get('Departamento').then(lista => this.departamento = lista);
  }

  cadastrarProfessor() {
    console.log(this.formulario.value);


  }
}
