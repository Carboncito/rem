import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../models';
import { NavbarService } from '../components';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router, public navbarService: NavbarService) {}

  login() {
    this.isAuthenticated = true;
    this.router.navigate([Routes.HOME]);
  }

  logout() {
    this.isAuthenticated = false;
    this.navbarService.resetState()
    this.router.navigate([Routes.LOGIN]);
  }

  checkAuth() {
    return this.isAuthenticated;
  }
}
