import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departamento } from '@app/_models/departamento';
import { ServidorService } from '@app/_services/servidor.service';
import { DataService } from '@app/_services/data.service';
import { Professor } from '@app/_models/professor';

@Component({
  selector: 'app-editar-professores',
  templateUrl: './editar-professores.component.html',
  styleUrls: ['./editar-professores.component.css']
})
export class EditarProfessoresComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  departamento: Departamento[] = [];

  constructor(private servidor: ServidorService, private data: DataService) { }
  professor: Professor;

  ngOnInit() {
    this.servidor.get(new Departamento()).then(lista => this.departamento = lista);
    this.professor = this.data.objeto;

  }


}
