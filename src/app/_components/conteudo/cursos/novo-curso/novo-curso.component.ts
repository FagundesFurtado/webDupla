import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }


  cadastrarCurso(){


  }


  teste(){
    console.log("toast")
      this.toastr.success("Voltou")


  }
}
