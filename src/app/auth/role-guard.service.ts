import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {


  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const objeto = route.data;
    const keys = Object.keys(objeto);

    const keyAcesso = keys[0];

    const user = localStorage.getItem('user');
    if (user) {
      const token = JSON.parse(user).Autenticacao;
      const tokenPayload = decode(token);

      if (!this.auth.isAuthenticated() || tokenPayload[keyAcesso] != route.data[keyAcesso]) {
        this.router.navigate(['login']);
        return false;
      }
      if (route.data.caminho) {
        if (route.data.caminho !== this.router.url) {
          this.router.navigate([route.data.caminho]);
          return false;
        }
      }

      return true;

    }
    console.log('User invalido');
    this.router.navigate(['login']);
    return false;
  }
}
