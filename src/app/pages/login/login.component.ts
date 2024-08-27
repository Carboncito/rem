import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../components';
import { AuthService, ToastService, TokenService } from '../../services';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Routes } from '../../models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(12)],
    ],
  });
  loading = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  getErrorInput(inp: 'email' | 'password'): boolean {
    const control = this.form.controls[inp];
    return !!control.errors && !!control.value;
  }

  onLogin() {
    if (this.form.invalid) return;
    this.loading = true;

    this.authService
      .login(this.form.value.email!, this.form.value.password!)
      .subscribe({
        next: ({ token }) => {
          this.loading = false;
          this.tokenService.setToken(token);
          this.router.navigate([Routes.HOME]);
        },
        error: (error) => {
          this.loading = false;
          this.tokenService.removeToken();
          const message =
            error?.error.statusCode === 404
              ? 'Email or password incorrect'
              : error?.error?.message[0] || error.message;
          this.toastService.show(message, 'danger');
        },
      });
  }
}
