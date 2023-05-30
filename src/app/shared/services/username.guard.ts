import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "./login/login.service";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UsernameGuard implements CanActivate {

  constructor(private service: LoginService, private route: ActivatedRoute) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: any = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token);

    return true;
  }
}
