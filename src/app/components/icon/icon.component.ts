import { Component, Input } from '@angular/core';
import { IconName } from './models';
import { ArrowDropIconComponent } from './arrow-drop-icon/arrow-drop-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { CommonModule } from '@angular/common';
import { LogoutIconComponent } from './logout-icon/logout-icon.component';
import { GoogleIconComponent } from './google-icon/google-icon.component';
import { GithubIconComponent } from './github-icon/github-icon.component';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    CommonModule,
    ArrowDropIconComponent,
    MenuIconComponent,
    LogoutIconComponent,
    GoogleIconComponent,
    GithubIconComponent,
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input({ required: true }) icon: IconName = 'arrow-drop';
  @Input() asButton: boolean = false;
  @Input() class: string = '';

  getClass(): string {
    return `hover:bg-secondary-200 rounded-full ${
      this.asButton ? 'cursor-pointer' : ''
    }`;
  }
}
