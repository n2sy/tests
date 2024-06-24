import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = { name: 'nidhal' };
  isLogged = false;

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  constructor() {}
}
