import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthService, ToastService } from './services';
import { ToastComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'rem';
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.toastService.setToastComponent(this.toastComponent);
  }

  isAuthenticated() {
    return this.authService.checkAuth();
  }
}
