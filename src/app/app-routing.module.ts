import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./features/features.module').then((m) => m.FeaturesModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
