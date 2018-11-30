import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '@app/_services/post.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nova-universidade',
  templateUrl: './nova-universidade.component.html',
  styleUrls: ['./nova-universidade.component.css']
})
export class NovaUniversidadeComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private post: PostService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }


  cadastrarUniversidade() {

    this.post.cadastrarUniversidade(this.formulario.value).subscribe(
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
