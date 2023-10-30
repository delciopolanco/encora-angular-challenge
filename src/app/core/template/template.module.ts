import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    TemplateComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class TemplateModule {}
