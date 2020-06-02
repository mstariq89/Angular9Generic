import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../../models/user/user';
import { Role } from '../../models/role/role';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public user = {
    firstName: 'Alexander',
    lastName: 'Pierce',
    image: 'assets/images/user2-160x160.jpg',
  };

  user1: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user1 = x);
  }

  login() {
    localStorage.setItem('token', 'LOGGED_IN');
    this.router.navigate(['/']);
  }

  get isAdmin() {
    return this.user && this.user1.role === Role.Admin;
  }

  register() {
    localStorage.setItem('token', 'LOGGED_IN');
    this.router.navigate(['/']);
  }

  logout1() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  logout() {
    this.authenticationService.logout();
  }
}
