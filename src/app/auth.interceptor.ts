import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from './services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = new TokenService();

  if (req.url.includes('omdbapi')) return next(req);

  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });

  return next(modifiedRequest);
};
