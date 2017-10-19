import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

// setup a path not found component
import { PathNotFoundComponent } from './path-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'merchandise', loadChildren: './merchandise/merchandise.module#MerchandiseModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
    { path: 'messages', loadChildren: './messages/messages.module#MessagesModule'},
    { path: 'account-deletion', loadChildren: './account-deletion/account-deletion.module#AccountDeletionModule'},
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'error-page/:status/:statusText/:url', component: PathNotFoundComponent},
    { path: '**', component: PathNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
