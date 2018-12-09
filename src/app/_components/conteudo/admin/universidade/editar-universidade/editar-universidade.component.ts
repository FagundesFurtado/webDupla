import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Universidade } from '@app/_models/Universidade';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';

@Component({
  selector: 'app-editar-universidade',
  templateUrl: './editar-universidade.component.html',
  styleUrls: ['./editar-universidade.component.css']
})
export class EditarUniversidadeComponent implements OnInit {


  @ViewChild('formulario') public formulario: NgForm;

  universidade: Universidade;

  constructor(private toast: ToastrService, private route: Router,
              private data: DataService, private servidor: ServidorService) { }

  ngOnInit() {

    this.universidade = this.data.objeto;
  }


  finalizarEdicao() {

   const saida = Object.assign(new Universidade, this.formulario.value);

   saida.idInstituto = this.universidade.idInstituto;
   console.log(saida);
    this.servidor.put('Universidade', saida).subscribe( data => {
      this.toast.success('Editado com sucesso');
      this.route.navigate(['universidades']);

    }, erro => {
      this.toast.error('Servidor indisponível no momento');

    });
  }



}
