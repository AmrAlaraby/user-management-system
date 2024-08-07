import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userPayload =localStorage.getItem('userPayload')
  if (userPayload && JSON.parse(userPayload).token) {
    return true;}
  const router = inject(Router)
  router.navigate(['/login'])

return false
  };
