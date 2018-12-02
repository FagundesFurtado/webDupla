import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { User } from '../../_models';
import decode from 'jwt-decode';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent {

  currentUser: User;
  admin: boolean;
  professor: boolean;
  aluno: boolean;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {

    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      console.log('Topo x ', x);
      if (this.currentUser) {
        const tokenPayload = decode(this.currentUser.Autenticacao);
        console.log('Topo ' , tokenPayload);
        this.admin = tokenPayload.admin;
        this.professor = tokenPayload.professor;
        this.aluno = tokenPayload.aluno;

        console.log(this.admin);
        console.log(this.professor);
        console.log(this.aluno);
      }

    });

    console.log(this.currentUser);


  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
