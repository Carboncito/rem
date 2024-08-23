import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _showMenu = false;

  constructor() {}

  get showMenu(): boolean {
    return this._showMenu;
  }

  toggleMenu() {
    this._showMenu = !this._showMenu;
  }

  resetState() {
    this._showMenu = false;
  }
}
