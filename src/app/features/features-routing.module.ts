import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from '../core/template/template.component';
import { PATHS } from '../shared/utils';

const routes: Routes = [
  { path: '', redirectTo: PATHS.HOME, pathMatch: 'full' },
  {
    path: PATHS.LOGIN,
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: PATHS.HOME,
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./private/private.module').then((m) => m.PrivateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
