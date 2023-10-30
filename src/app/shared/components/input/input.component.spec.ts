import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessages, InputComponent } from './input.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let parentFormGroup: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    });

    parentFormGroup = new FormGroup({
      testControl: new FormControl(''),
    });

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.formControlName = 'testControl';
    component.control = parentFormGroup.get('testControl') as FormControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
