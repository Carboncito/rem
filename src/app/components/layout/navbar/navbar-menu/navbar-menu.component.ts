import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../../avatar/avatar.component';
import { IconComponent } from '../../../icon';
import { AuthService } from '../../../../services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [CommonModule, AvatarComponent, IconComponent, RouterLink],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.css',
})
export class NavbarMenuComponent {
  @Input({ required: true }) userName: string = '';
  @Input() userImage?: string;

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }
}
