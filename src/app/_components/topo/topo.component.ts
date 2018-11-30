import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { User } from '../../_models';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent {

  currentUser: User;


  constructor(private router: Router,
              private authenticationService: AuthenticationService  ) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);



  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
