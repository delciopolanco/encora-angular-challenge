import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}
