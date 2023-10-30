import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/shared/utils';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  logOut() {
    this.authService.closeSession();
    this.router.navigate([PATHS.LOGIN]);
  }
}
