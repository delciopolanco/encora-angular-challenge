import { Component, Input, Optional, Self } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
} from '@angular/forms';

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};

export interface ErrorMessages {
  [key: string]: (params: any) => string;
}

export const ErrorMessages: ErrorMessages = {
  required: () => 'This field is required',
  email: () => 'Email is invalid',
  minlength: (params: { requiredLength: number }) =>
    'The min number of characters is ' + params.requiredLength,
  maxlength: (params: { requiredLength: number }) =>
    'The max allowed number of characters is ' + params.requiredLength,
  pattern: (params: { requiredPattern: boolean }) =>
    'The required pattern is: ' + params.requiredPattern,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent {
  @Input() formControlName = '';
  @Input() control!: AbstractControl;
  @Input() type: 'text' | 'password' = 'text';
  @Input() label = '';
  @Input() placeholder = '';

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }

  get hasError(): boolean {
    return (
      (this.control &&
        this.control.errors &&
        (this.control.dirty || this.control.touched)) ||
      false
    );
  }

  getError(): string {
    const errors = this.control.errors;

    if (errors) {
      return Object.keys(errors).map((field) =>
        this.getMessage(field, errors[field])
      )[0];
    }

    return '';
  }

  getMessage(type: string, params: any) {
    return ErrorMessages[type](params);
  }
}
