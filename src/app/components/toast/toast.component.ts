import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../icon';
import { FADE_IN_UP_DELAY } from '../../config';

export type ToastType = 'success' | 'danger' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  message: string = '';
  visible: boolean = false;
  shouldRender: boolean = false;
  toastColor: string = 'bg-blue-500';
  toastBorder: string = 'border-blue-500';

  close() {
    this.visible = false;
    setTimeout(() => {
      this.shouldRender = false;
    }, FADE_IN_UP_DELAY + 1);
  }

  showToast(message: string, type: ToastType): void {
    this.message = message;
    this.toastColor = this.getToastTypeClass(type);
    this.toastBorder = this.getToastBorderClass(type);
    this.shouldRender = true;
    this.visible = true;
    setTimeout(() => this.close(), 3000);
  }

  private getToastTypeClass(type: ToastType): string {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'danger':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  }

  private getToastBorderClass(type: ToastType): string {
    switch (type) {
      case 'success':
        return 'border-green-500';
      case 'danger':
        return 'border-red-500';
      case 'info':
        return 'border-blue-500';
      case 'warning':
        return 'border-yellow-500';
      default:
        return 'border-blue-500';
    }
  }
}
