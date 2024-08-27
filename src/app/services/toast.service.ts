import { Injectable } from '@angular/core';
import { ToastComponent, ToastType } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastComponent!: ToastComponent;

  setToastComponent(toastComponent: ToastComponent): void {
    this.toastComponent = toastComponent;
  }

  show(message: string, type: ToastType): void {
    this.toastComponent.showToast(message, type);
  }

}
