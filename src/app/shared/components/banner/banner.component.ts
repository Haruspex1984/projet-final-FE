import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import jwt_decode from "jwt-decode";
import {User} from "../../models/User";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  loggedUser?: User
  isUserLogged : boolean = false;
  isAdmin: boolean = false;


  constructor(private loginService: LoginService) {
  }

  logout() {
    if (window.confirm("Voulez-vous vous déconnecter ?")) {
      this.loginService.logout()
      location.reload()
    }
  }

  ngOnInit(): void {
    this.loginService.isAdmin$.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
    this.loginService.getUserStatus().subscribe(value => {
      this.isUserLogged = value;
    })
    this.loginService.user$.subscribe(currentUser => {
      this.loggedUser = currentUser;

    })

  }


}
