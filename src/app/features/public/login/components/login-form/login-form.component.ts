import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../core/models';
import { validateForm } from '../../../../../shared/utils';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  @Output() onValid: EventEmitter<User> = new EventEmitter<User>();

  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid) {
      validateForm(this.loginForm);
      return;
    }

    this.onValid.emit(this.loginForm.value);
  }
}
