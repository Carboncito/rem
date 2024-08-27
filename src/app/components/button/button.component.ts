import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent, type IconName } from '../icon';
import { SpinnerComponent } from '../spinner';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'google' | 'github';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() fullWidth: boolean = false;
  @Input() label?: string;
  @Input() type?: HTMLButtonElement['type'];
  @Input() icon?: IconName;
  @Input() disabled?: HTMLButtonElement['disabled'];
  @Input() loading?: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  onClickHandler() {
    this.onClick.emit();
  }

  getVariantClass() {
    switch (this.variant) {
      case 'primary':
        return 'button-primary';
      case 'secondary':
        return 'button-secondary';
      case 'danger':
        return 'button-danger';
      case 'google':
        return 'button-google';
      case 'github':
        return 'button-github';
      default:
        return 'button-primary';
    }
  }

  getSpinnerColor() {
    switch (this.variant) {
      case 'google':
      case 'github':
        return 'primary';
      case 'primary':
      case 'danger':
        return 'white';
      case 'secondary':
        return 'secondary';
      default:
        return 'white';
    }
  }
}
