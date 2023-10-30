import { FormGroup } from "@angular/forms";

export const validateForm = (form: FormGroup) => {
  Object.keys(form.controls).forEach((field) => {
    const control = form.get(field);
    control?.markAsTouched({ onlySelf: true });
  });
};
