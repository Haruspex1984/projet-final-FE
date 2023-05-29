import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../user/user.service";
import {LoginService} from "../login/login.service";



@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor(private loginService: LoginService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const username = route.paramMap.get('username');
    return this.loginService.getUser(username);

  }
}
