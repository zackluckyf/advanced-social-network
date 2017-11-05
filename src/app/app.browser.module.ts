import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';

// routing module
import { AppRoutingModule } from './app-routing.module';

// app modules
import { StoreModule } from './store/store.module';

// interceptors and auth service
import { AuthService } from './authorization/authorization.service';
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
    BrowserModule.withServerTransition({appId: 'social-network'}),
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule,
    ToasterModule,
    StoreModule,
    AccountDeletionModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationInterceptor,
      multi: true,
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
