import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../shared/services/user/user.service";
import {User} from "../../shared/models/User";
import {Observable} from "rxjs";
import {LoginService} from "../../shared/services/login/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user? : User
  isAdmin : boolean = false;
  constructor(private route : ActivatedRoute, private service : LoginService) {

  }



  getUser(){
    const username = this.route.snapshot.params['username']
    this.service.getUser(username).subscribe({next : value => {
      this.user = value
      }

    })
  }
  ngOnInit(): void {
    this.getUser()
    const username = this.route.snapshot.params['username']
    this.service.setRole(username)
    this.service.isAdmin$.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }





}
