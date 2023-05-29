import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HitelesitService
{
  private TOKEN_KEY = 'accessToken';
  private userRole = '';
  private userId = '';

  constructor( private router: Router ) { }

  setToken(token: string)
  {
    localStorage.setItem( this.TOKEN_KEY, token);
  }

  getToken() : string | null
  {
    return localStorage.getItem( this.TOKEN_KEY );
  }

  setUserRole( role: string )
  {
    localStorage.setItem( this.userRole , role );
  }

  setUserId( userId: string )
  {
    localStorage.setItem( 'userId' , userId);
  }

  getUserRole() : string | null
  {
    return localStorage.getItem( this.userRole );
  }

  getUserId() : string | null
  {
    return localStorage.getItem( 'userId' );
  }

  removeToken()
  {
    localStorage.removeItem( this.TOKEN_KEY );
  }

  isLoggedIn() : boolean
  {
    return !!this.getToken();
  }

  isAdmin() : boolean
  {
    return this.getUserRole() === 'admin';
  }

  vendegAkadalyozasa(): boolean
  {
    const isLoggedIn = this.isLoggedIn();

    if( !isLoggedIn )
    {
      this.router.navigateByUrl('/bejelentkezes');
    }

    return isLoggedIn;
  }

}
