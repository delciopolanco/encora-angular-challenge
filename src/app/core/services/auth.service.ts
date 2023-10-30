import { Injectable } from '@angular/core';
import { token } from 'src/app/shared/utils';
import { User } from '../models';

@Injectable()
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  authenticate(user: User): void {
    localStorage.setItem('token', token(user.email));
  }
}
