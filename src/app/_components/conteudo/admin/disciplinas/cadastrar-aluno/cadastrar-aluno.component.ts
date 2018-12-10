import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '@app/_models/aluno';
import { Disciplina } from '@app/_models/disciplina';
import { ServidorService } from '@app/_services/servidor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private servidor: ServidorService, private route: Router, private toast: ToastrService) { }

  alunos: Aluno[] = [];
  disciplinas: Disciplina[] = [];

  ngOnInit() {
    this.servidor.get('Aluno').then( lista => this.alunos = lista);
    this.servidor.get('Disciplina').then( lista => this.disciplinas = lista);

  }


  matricular() {

    const aluno = this.formulario.value;
    aluno['chave'] = aluno.aluno + '-' + aluno.disciplina;
    console.log(this.formulario.value);
    console.log(aluno);


    this.servidor.post(aluno, 'alunodisciplina').subscribe( data => {
        this.toast.success('Matriculado com sucesso');
        this.route.navigate(['disciplinas']);
    }, erro => {
      this.toast.error('Servidor indisponível no momento');
    });

  }
}
