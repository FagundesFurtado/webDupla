import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '@app/_models/departamento';
import { ServidorService } from '@app/_services/servidor.service';



@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private toastr: ToastrService, private servidor: ServidorService) { }

  departamentos: Departamento[] = [];

  ngOnInit() {
    this.servidor.get(new Departamento()).then(lista => this.departamentos = lista);

  }


  cadastrarCurso() {


  }


  teste() {
    console.log("toast")
    this.toastr.success("Voltou")


  }
}
