import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  authenticate(user: User) {
    this.authService.authenticate(user);
    this.router.navigate(['/', 'home']);
  }
}
