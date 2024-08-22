import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() initials: boolean = false;
  @Input() imageUrl?: string;
  @Input() text?: string;

  getClass() {
    switch (this.size) {
      case 'small':
        return 'h-8 w-8';
      case 'medium':
        return 'h-12 w-12';
      case 'large':
        return 'h-24 w-24';
      default:
        return 'h-12 w-12';
    }
  }

}
