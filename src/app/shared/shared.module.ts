import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

const imports = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

const declarations = [InputComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
