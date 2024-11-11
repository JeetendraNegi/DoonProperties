// auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = checkAuthentication();

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

// Simulate an authentication check (replace with real logic)
function checkAuthentication(): boolean {
  const token = localStorage.getItem('authToken');
  return !!token;
}
