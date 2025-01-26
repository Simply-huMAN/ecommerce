import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.isLoggedIn()){
    console.log( `AUTH GUARD: User is not logged in. Redirecting user to login page`);
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  console.log(`AUTH GUARD: User is logged in. Allowing user to access the route`);
  return true;
};
