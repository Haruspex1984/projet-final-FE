import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginForm} from "../../shared/forms/loginForm";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../shared/services/login/login.service";
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string | undefined


  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  submit() {
    let values = this.loginForm.value;
    let newLoginForm: LoginForm = {
      username: values.username,
      password: values.password
    }

    this.loginService.login(newLoginForm).subscribe({
      next: (response : any) => {
        let data = response.token;
        localStorage.setItem('token',data);
        this.loginService.setLoggedInStatus();
        const decodedToken : any = jwt_decode(data);
        const username = decodedToken.sub;

        this.loginService.setRole(username);

        this.router.navigate(['']).then();
      },
    error : (err : any) => {
        this.errorMessage = JSON.stringify(err.error)
      }
    })
  }




    // this.authService.login(newLoginForm).subscribe(
    //   (response: any) => {
    //     const token = response.token;
    //     localStorage.setItem('token', token);
    //     this.errorMessage = undefined;
    //     this.authService.setLoggedInStatus();
    //     const decodedToken : any = jwt_decode(token);
    //     const username : any = decodedToken.sub;
    //     this.router.navigate(['']);
    //   },
    //   (error: any) => {
    //     this.errorMessage = JSON.stringify(error.error);
    //   }
    // );

}
