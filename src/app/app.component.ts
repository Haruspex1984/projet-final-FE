import {Component, OnInit} from '@angular/core';
import {LoginService} from "./shared/services/login/login.service";
import {UserService} from "./shared/services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Labo-final-FE';
  constructor(private service : LoginService, private userService : UserService) {
  }
  ngOnInit(): void {
    this.service.setLoggedInStatus();
  }

}
