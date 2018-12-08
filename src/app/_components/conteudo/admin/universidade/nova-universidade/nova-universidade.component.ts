import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServidorService } from '@app/_services/servidor.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { Universidade } from '@app/_models/Universidade';



@Component({
  selector: 'app-nova-universidade',
  templateUrl: './nova-universidade.component.html',
  styleUrls: ['./nova-universidade.component.css']
})
export class NovaUniversidadeComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private servidor: ServidorService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }


  cadastrarUniversidade() {

    this.servidor.post(this.formulario.value, 'Universidade').subscribe(
      data => {
        const resposta = data.json();
        if (resposta.status === 1) {
          this.toastr.success('Cadastrado com sucesso');
          this.router.navigate(['/universidades']);
        } else {
           this.router.navigate(['/login']);
        }
      },
      error => {
        this.toastr.error('Servidor não disponível no momento');
      }
    );


  }
}
