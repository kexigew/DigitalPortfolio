import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn())
        return true;

    this.router.navigate(['/login']);
    return false;
  }
}
