import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

// setup a path not found component
import { PathNotFoundComponent } from './path-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // ready to be converted to lazy load when possible with angular universal
    // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    // { path: 'merchandise', loadChildren: './merchandise/merchandise.module#MerchandiseModule' },
    // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
    { path: '**', component: PathNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
