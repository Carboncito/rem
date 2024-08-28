import { Component } from '@angular/core';
import { AvatarComponent } from '../../avatar/avatar.component';
import { IconComponent } from '../../icon';
import { CommonModule } from '@angular/common';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarService } from './navbar.service';
import { Routes, User } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AvatarComponent, IconComponent, NavbarMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly user: User = new User(
    'Jon',
    'https://seeklogo.com/images/B/Bob_Esponja-logo-0D3F3F01DD-seeklogo.com.png'
  );

  constructor(public navbarService: NavbarService, private router: Router) {}

  toggleMenu() {
    this.navbarService.toggleMenu();
  }

  goWatchlist() {
    this.router.navigate([Routes.WATCHLIST]);
  }
}
