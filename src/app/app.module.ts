import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// routing module
import { AppRoutingModule } from './app-routing.module';

// app modules
import { StoreModule } from './store/store.module';

// app components/modules

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PathNotFoundComponent } from './path-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MerchandiseModule } from './merchandise/merchandise.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ecommerce'}),
    DashboardModule,
    MerchandiseModule,
    ProfileModule,
    SharedModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
