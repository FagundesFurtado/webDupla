import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Departamento } from '../../../../../_models/departamento';
import { NgForm } from '@angular/forms';
import { DataService } from '@app/_services/data.service';
import { ServidorService } from '@app/_services/servidor.service';
import { Universidade } from '@app/_models/Universidade';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css'],
  providers: [ServidorService]
})

export class EditarDepartamentoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private router: Router, private data: DataService, private servidor: ServidorService,
              private toast: ToastrService) { }

  departamento: Departamento;
  instituto: Universidade[] = [];

  ngOnInit() {

    const u = new Universidade();
    u.nome = 'Universidade 7';
    this.instituto.push(u);
    this.servidor.get('Universidade').then(lista => this.instituto = lista );


    this.departamento =  this.data.objeto;
    console.log(this.departamento);

  }

  finalizarEdicao() {

    const saida = Object.assign(new Departamento, this.formulario.value);
    saida.idDepartamento = this.departamento.idDepartamento;
    console.log(saida);
    this.servidor.put('Departamento', saida).subscribe( data => {
      console.log(data);
      this.toast.success('Editado com sucesso');
      this.router.navigate(['departamentos']);
    }, erro => {
      console.log(erro);
      this.toast.error('Servidor indisponível no momento');
    });
  }

}
