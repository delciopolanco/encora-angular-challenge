import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services';
import { PATHS } from '../../shared/utils';

@Injectable()
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate([PATHS.LOGIN]);
      return false;
    }
    return true;
  }
}

export const IsAuthenticated: CanActivateFn = (): boolean => {
  return inject(AuthGuardService).canActivate();
};
