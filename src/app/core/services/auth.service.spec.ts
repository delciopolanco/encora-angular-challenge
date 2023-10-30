import { AuthService } from './auth.service';
import { User } from '../models';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    localStorage.setItem('token', 'testToken');

    const isAuthenticated = authService.isAuthenticated();

    expect(isAuthenticated).toBeTruthy();
  });

  it('should return false if user is not authenticated', () => {
    const isAuthenticated = authService.isAuthenticated();

    expect(isAuthenticated).toBeFalsy();
  });

  it('should authenticate user and store token in localStorage', () => {
    const user: User = { email: 'test@example.com', password: 'password' };

    authService.authenticate(user);

    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeDefined();
    expect(typeof storedToken).toBe('string');
  });

  it('should clear session data from localStorage', () => {
    localStorage.setItem('token', 'testToken');

    authService.closeSession();

    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeNull();
  });
});
