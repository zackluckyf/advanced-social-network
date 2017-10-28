import { Injectable } from '@angular/core';
// import decode from 'jwt-decode';

// do some work with this to setup jwt for passport

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string){
    localStorage.setItem('token', token);
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