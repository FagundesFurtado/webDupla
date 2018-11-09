import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { User} from '../../_models';
import { Menu} from '../../_models/menu'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent {
    
    currentUser: User;

    menu: Menu [] = [];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
       
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        




        this.menu.push(new Menu("Início", "/"))

        this.menu.push(new Menu("Notas", "/notas"))
        this.menu.push(new Menu("Alterar Notas", "/alterarNotas"))
        this.menu.push(new Menu("Presença", "/presenca"))



       // { path: 'notas', component: NotasComponent },
     //   { path: 'alterarNotas', component: MudarNotasComponent },
      //  { path: 'presenca', component: PresencaComponent },




    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}