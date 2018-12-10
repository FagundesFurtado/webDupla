import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AlunoDisciplina } from '@app/_models/alunoDisciplina';
import { ServidorService } from '@app/_services/servidor.service';
import { AlunoNota } from '@app/_models/alunoNota';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mudar-notas',
  templateUrl: './mudar-notas.component.html',
  styleUrls: ['./mudar-notas.component.css']
})



export class MudarNotasComponent implements OnInit {

  constructor(private servidor: ServidorService, private route: Router,
              private toast: ToastrService) { }

  @ViewChild('formulario') public formulario: NgForm;


  alunos: AlunoDisciplina[] = [];
  notas: AlunoNota[][] = [];
  keys: string[] = [];
  listaAtual: AlunoNota[];

  ngOnInit() {
    this.servidor.get('alunodisciplina').then(lista => {
      console.log('lista ' , lista);
      for (const l of lista) {
        let aluno = new AlunoNota();
        if (!this.notas[l.disciplinaNome]) {
          this.notas[l.disciplinaNome] = new Array();
        }
        aluno = Object.assign(new AlunoNota, l);

        this.notas[l.disciplinaNome].push(aluno);
      }
      const array1 = ['a', 'b', 'c'];
      Object.entries(this.notas).forEach(
        ([key, value]) => {
          console.log(key);
          this.keys.push(key);
        }
      );

      this.alunos = lista;

    });

  }

  finalizarAtualizacao() {
    let saida = this.formulario.value;
    let resposta = [];
    for (let i = 0; i < this.listaAtual.length; i++) {
        let a = new AlunoNota();
        const chave = saida['chave' + i];
        a.chave = chave;
        a.p1 = saida[chave + 'p1'];
        a.p2 = saida[chave + 'p2'];
        a.trabalho = saida[chave + 'trabalho'];
        const b = chave.split('-');
        a.aluno = b[0];
        a.disciplina = b[1];
        resposta.push(a);
      }
    console.log('resposta ', resposta);
    console.log(JSON.stringify(resposta));

    this.servidor.put('alunodisciplina', resposta).subscribe( data => {
        this.toast.success('Notas atualizadas');
    }, erro => {
        this.toast.error('Servidor indisponível no momento');
    });


  }


  valor(i) {
    this.listaAtual = this.notas[i];

  }

}
