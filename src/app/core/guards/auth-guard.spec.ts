import { AuthService } from '../services';
import { Router } from '@angular/router';
import { PATHS } from '../../shared/utils';
import { AuthGuardService } from './auth-guard';

describe('AuthGuardService', () => {
  let authService: AuthService;
  let router: Router;
  let authGuardService: AuthGuardService;

  beforeEach(() => {
    authService = {
      isAuthenticated: jest.fn(() => true),
    } as unknown as AuthService;

    router = {
      navigate: jest.fn(),
    } as unknown as Router;

    authGuardService = new AuthGuardService(authService, router);
  });

  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });

  it('should return true and not navigate if user is authenticated', () => {
    const canActivate = authGuardService.canActivate();

    expect(canActivate).toBeTruthy();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should return false and navigate to login page if user is not authenticated', () => {
    (authService.isAuthenticated as jest.Mock).mockReturnValue(false); // Mocking isAuthenticated function

    const canActivate = authGuardService.canActivate();

    expect(canActivate).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith([PATHS.LOGIN]);
  });
});
