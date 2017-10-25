import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// routing module
import { AppRoutingModule } from './app-routing.module';

// app modules
import { StoreModule } from './store/store.module';

// interceptors
import { ValidationInterceptor } from './authorization/validation-interceptor';

// app components/modules

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PathNotFoundComponent } from './path-not-found.component';
import { AccountDeletionModule } from './account-deletion/account-deletion.module';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ecommerce'}),
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
    AppRoutingModule,
    AccountDeletionModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ValidationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
