import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Departamento } from '@app/_models/departamento';
import { NgForm } from '@angular/forms';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';
import { Universidade } from '@app/_models/Universidade';


@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css'],
  providers: [ServidorService]
})

export class EditarDepartamentoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private router: Router, private data: DataService, private servidor: ServidorService) { }

  departamento: Departamento;
  instituto: Universidade[] = [];

  ngOnInit() {

    const u = new Universidade();
    u.nome = 'Universidade 7';
    this.instituto.push(u);
    this.servidor.get(new Universidade()).then(lista => this.instituto = lista );


    this.departamento =  this.data.objeto;
    console.log(this.departamento);

  }

}
