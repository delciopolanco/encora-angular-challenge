import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/shared/utils';

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
