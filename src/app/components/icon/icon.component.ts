import { Component, Input } from '@angular/core';
import { IconName } from './models';
import { ArrowDropIconComponent } from './arrow-drop-icon/arrow-drop-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { CommonModule } from '@angular/common';
import { LogoutIconComponent } from './logout-icon/logout-icon.component';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    CommonModule,
    ArrowDropIconComponent,
    MenuIconComponent,
    LogoutIconComponent,
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input({ required: true }) icon: IconName = 'arrow-drop';
  @Input() asButton: boolean = false;

  getClass(): string {
    return `hover:bg-secondary-200 rounded-full ${
      this.asButton ? 'cursor-pointer' : ''
    }`;
  }
}
