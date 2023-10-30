import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './guards';
import { AuthService } from './services';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [],
  providers: [AuthGuardService, AuthService],
  imports: [CommonModule, TemplateModule],
})
export class CoreModule {}
