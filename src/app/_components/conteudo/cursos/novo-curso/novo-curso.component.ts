import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '@app/_models/departamento';



@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  constructor(private toastr: ToastrService) { }

  departamentos : Departamento[] = []

  ngOnInit() {

      for(let i=0; i<10; i++){
        let d = new Departamento()
        d.nome="Departamento "+i
        this.departamentos.push(d)

      }

  }


  cadastrarCurso(){


  }


  teste(){
    console.log("toast")
      this.toastr.success("Voltou")


  }
}
