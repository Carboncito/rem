import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../models';
import { NavbarService } from '../components';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router,
    public navbarService: NavbarService,
    public tokenService: TokenService
  ) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.url + '/auth/login', {
      email,
      password,
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.tokenService.removeToken();
    this.navbarService.resetState();
    this.router.navigate([Routes.LOGIN]);
  }

  checkAuth() {
    const token = this.tokenService.getToken();
    this.isAuthenticated = !!token;
    return this.isAuthenticated;
  }
}
