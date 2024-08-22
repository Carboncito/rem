import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../../avatar/avatar.component';
import { IconComponent } from '../../../icon';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [CommonModule, AvatarComponent, IconComponent],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.css',
})
export class NavbarMenuComponent {
  @Input({ required: true }) userName: string = '';
  @Input() userImage?: string;
}
