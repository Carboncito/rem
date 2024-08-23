import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../components';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login()
  }
}
