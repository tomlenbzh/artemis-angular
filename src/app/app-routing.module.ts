import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule) },
  {
    path: 'backoffice',
    loadChildren: () => import('./pages/backoffice/backoffice.module').then(m => m.BackofficeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
