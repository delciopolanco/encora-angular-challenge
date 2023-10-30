import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valid form data when login is called with a valid form', () => {
    const validUser = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const emitSpy = jest.spyOn(component.onValid, 'emit');

    component.loginForm.setValue(validUser);
    component.login();

    expect(emitSpy).toHaveBeenCalledWith(validUser);
  });

  it('should not emit valid form data when login is called with an invalid form', () => {
    const invalidUser = {
      email: 'test@example.com',
      password: '',
    };

    const emitSpy = jest.spyOn(component.onValid, 'emit');

    component.loginForm.setValue(invalidUser);
    component.login();

    expect(emitSpy).not.toHaveBeenCalled();
  });
});
