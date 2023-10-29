import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [SharedModule, PublicRoutingModule],
})
export class PublicModule {}
