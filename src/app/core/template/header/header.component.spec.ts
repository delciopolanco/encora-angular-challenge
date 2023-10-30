import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { PATHS } from '../../../shared/utils/pahts';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {
            closeSession: jest.fn(),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out and navigate to login page', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.logOut();

    expect(authService.closeSession).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([PATHS.LOGIN]);
  });
});
