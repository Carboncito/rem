import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services';
import { Routes as AppRoutes } from '../models';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.checkAuth();

  if (route.url[0]?.path !== AppRoutes.LOGIN && !isAuthenticated) {
    console.log('Not authenticated');
    router.navigate([AppRoutes.LOGIN]);
    return false;
  }

  if (route.url[0]?.path === AppRoutes.LOGIN && isAuthenticated) {
    console.log('Authenticated');
    router.navigate([AppRoutes.HOME]);
    return false;
  }

  return true;
};
