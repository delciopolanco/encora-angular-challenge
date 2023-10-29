import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const shared = [CommonModule, RouterModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [...shared],
  exports: [...shared],
})
export class SharedModule {}
