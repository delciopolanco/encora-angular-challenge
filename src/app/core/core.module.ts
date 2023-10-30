import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './guards';
import { AuthService } from './services';

@NgModule({
  declarations: [],
  providers: [AuthGuardService, AuthService],
  imports: [CommonModule],
})
export class CoreModule {}
