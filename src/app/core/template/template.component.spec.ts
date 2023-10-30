import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../services';
import { RouterModule } from '@angular/router';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TemplateComponent,
        HeaderComponent,
        MainContentComponent,
        FooterComponent,
        TemplateComponent,
      ],
      providers: [AuthService],
      imports: [RouterModule],
    });
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
