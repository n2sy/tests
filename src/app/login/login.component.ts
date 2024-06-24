import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //cypress
  http = inject(HttpClient);
  users: Observable<Object[]>;
  constructor(public userSer: UserService) {}

  // Cypress
  ngOnInit() {
    this.users = this.http.get<Object[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  // ngOnChanges() {
  //   this.isLogged = this.userSer.isLogged;
  //   this.user = this.userSer.user;
  // }

  // signin() {
  //   this.userSer.login();
  //   console.log(this.userSer.isLogged);
  // }
}
