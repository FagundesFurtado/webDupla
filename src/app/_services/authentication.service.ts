import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    // const a = new User();
    // a.firstName = 'Cristiano';
    // a.lastName = 'Fagundes';
    // a.id = 1;
    // a.token = 'tokenSenha';
    // this.currentUserSubject.next(a);
    // localStorage.setItem('currentUser', JSON.stringify(a));

    return this.http.post<any>('http://localhost:3000/autenticacao', { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        console.log(user);
        if (user && user.token) {
          console.log('Entrou no user');
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }else{
          console.log('nao entrou no user');
        }
        return user;
      })).timeout(3000);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
