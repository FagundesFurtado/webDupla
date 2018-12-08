import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ServidorService } from '@app/_services/servidor.service';
import { Universidade } from '@app/_models/Universidade';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-departamento',
  templateUrl: './novo-departamento.component.html',
  styleUrls: ['./novo-departamento.component.css']
})
export class NovoDepartamentoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;



  universidade: Universidade[] = [];

  constructor(private servidor: ServidorService, private toast: ToastrService,
    private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.servidor.get('Universidade').then(lista => this.universidade = lista);
  }

  cadastrar() {

    this.servidor.post(this.formulario.value, 'Departamento').subscribe(data => {
      this.toast.success('Cadastrado com sucesso');
      this.route.navigate(['/departamentos']);
    },
      erro => {
        if (erro.status === 401) {
          this.auth.logout();
        } else {
          this.toast.error('Servidor indisponível no momento');
        }
      });

  }


}
