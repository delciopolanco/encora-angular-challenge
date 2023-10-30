import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { User } from '../models';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    localStorage.setItem('token', 'testToken');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false if user is not authenticated', () => {
    localStorage.clear();
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should authenticate user and store token in localStorage', () => {
    const user: User = { email: 'test@example.com', password: '' };
    service.authenticate(user);
    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeDefined();
    expect(storedToken).toEqual(jasmine.any(String));
  });

  it('should clear session data from localStorage', () => {
    localStorage.setItem('token', 'testToken');
    service.closeSession();
    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeNull();
  });
});
