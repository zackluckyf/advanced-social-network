import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

// setup a path not found component
import { PathNotFoundComponent } from './path-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', loadChildren: './landing/landing.module#LandingModule' },
    { path: 'merchandise', loadChildren: './merchandise/merchandise.module#MerchandiseModule' },
    { path: '**', component: PathNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
