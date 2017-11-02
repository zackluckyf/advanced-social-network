import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// import decode from 'jwt-decode';



@Injectable()
export class AuthService {

  // https://medium.com/@zainzafar/localstorage-with-angular-universal-2a111fb4af72

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
        return localStorage.getItem('token');
    }
  }

  public setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    // return tokenNotExpired(null, token);
    return true;
  }
}