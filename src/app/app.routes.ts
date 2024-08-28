import { Routes } from '@angular/router';
import { HomeComponent, LoginComponent, WatchlistComponent } from './pages';
import { Routes as AppRoutes } from './models';
import { authGuard } from './guards';

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    canActivate: [authGuard],
    component: HomeComponent,
  },
  {
    path: AppRoutes.LOGIN,
    canActivate: [authGuard],
    component: LoginComponent,
  },
  {
    path: AppRoutes.WATCHLIST,
    canActivate: [authGuard],
    component: WatchlistComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutes.HOME,
  },
];
