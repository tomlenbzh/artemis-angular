// Imports from Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      {
        path: 'who-are-we',
        loadChildren: () => import('./artemis/who-are-we/who-are-we.module').then(m => m.WhoAreWeModule)
      },
      {
        path: 'approach',
        loadChildren: () => import('./artemis/approach/approach.module').then(m => m.ApproachModule)
      },
      {
        path: 'principles',
        loadChildren: () => import('./artemis/principles/principles.module').then(m => m.PrinciplesModule)
      },
      {
        path: 'values',
        loadChildren: () => import('./artemis/values/values.module').then(m => m.ValuesModule)
      },
      {
        path: 'ethics',
        loadChildren: () => import('./artemis/ethics/ethics.module').then(m => m.EthicsModule)
      },
      {
        path: 'change-management',
        loadChildren: () =>
          import('./consulting/change-management/change-management.module').then(m => m.ChangeManagementModule)
      },
      {
        path: 'team-building',
        loadChildren: () => import('./consulting/team-building/team-building.module').then(m => m.TeamBuildingModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
