import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  /**
   *
   */
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;

      return this.checkLogin(url);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      const url = `/${route.path}`;

      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.userService.loggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
